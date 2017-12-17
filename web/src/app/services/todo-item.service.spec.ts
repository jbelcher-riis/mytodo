import { TestBed, inject, async} from '@angular/core/testing';
import { HttpModule, Http, Response, BaseRequestOptions, XHRBackend, ResponseOptions } from '@angular/http';
import { TodoItemService } from './todo-item.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TodoItem } from '../models/todo-item';

describe('TodoItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TodoItemService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([TodoItemService], (service: TodoItemService) => {
    expect(service).toBeTruthy();
  }));

  describe('saveTodoItem', () => {
    it("should return todo item", async(inject([TodoItemService, MockBackend], (service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions({ status: 200, body: JSON.stringify({description: "test", id: 5})})))
      })

      service.saveTodoItem().subscribe(response => {
        expect(response.id).toEqual(5);
        expect(response.description).toEqual("test");
      })
    })));
  });

  describe('getTodoItems', () => {
    it("should return two todo items", async(inject([TodoItemService, MockBackend], (service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions({ status: 200, body: JSON.stringify(
        [
          {description: "test2", id: 2},
          {description: "test5", id: 5}
        ]
        )})))
      })

      service.getTodoItems().subscribe(response => {
        expect(response.length).toEqual(2);

        expect(response[0].id).toEqual(2);
      })
    })));
  });

  describe('deleteTodoItem', () => {
    it("should have a 200 response on success", async(inject([TodoItemService, MockBackend],(service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions({ status: 200 })))
      });

      let todoItem = new TodoItem();
      todoItem.description = "test";
      todoItem.id = 42;

      service.deleteTodoItem(todoItem).subscribe(response => {
        expect(response).toEqual({});
      })
    })));
  });
});
