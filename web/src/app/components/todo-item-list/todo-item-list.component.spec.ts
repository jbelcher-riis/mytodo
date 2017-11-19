import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoItemListComponent } from './todo-item-list.component';
import { TodoItemService } from '../../services/todo-item.service';
import { TodoItemServiceStub } from '../../services/todo-item.service.stub';
import { Observable } from 'rxjs/Rx';

describe('TodoItemListComponent', () => {
  let component: TodoItemListComponent;
  let fixture: ComponentFixture<TodoItemListComponent>;
  let todoItemService: TodoItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemListComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [TodoItemServiceStub]
    })
    .overrideComponent(TodoItemListComponent, {set: { providers: [{provide: TodoItemService, useClass: TodoItemServiceStub}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoItemService = fixture.debugElement.injector.get(TodoItemService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe("onSubmit", () => {
    it("should add a todo item to the todo item array", () => {
      spyOn(todoItemService, 'saveTodoItem').and.returnValue(Observable.of({id: 1, item: "test"}));
      component.onSubmit({item: "test"});

      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        fixture.detectChanges();
        expect(component.todoItems.length).toEqual(1);
      }); 
    });
  });
});
