import { TestBed, inject, async} from '@angular/core/testing';
import { HttpModule, Http, Response, BaseRequestOptions, XHRBackend, ResponseOptions } from '@angular/http';
import { TodoItemService } from './todo-item.service';
import { MockBackend, MockConnection } from '@angular/http/testing';

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
});
