import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css'],
  providers: [TodoItemService]
})
export class TodoItemListComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private todoItemService: TodoItemService) { 
    this.createForm();
  }

  @ViewChild("description") descriptionInput: ElementRef;
  private createForm() {
    this.todoForm = this.formBuilder.group({
      item: ''
    })
  }

  todoForm: FormGroup;
  selectedTodoItem: TodoItem;
  todoItems: TodoItem[] = [];

  ngOnInit() {
    this.todoItemService.getTodoItems().subscribe(
      todoItems => this.todoItems = todoItems
    );
  }

  onSubmit(model) {
    const todoItemToSave: TodoItem = {
      id: this.selectedTodoItem ? this.selectedTodoItem.id : null,
      description: model.item
    }
    if(!this.selectedTodoItem){
      this.todoItemService.saveTodoItem(todoItemToSave).subscribe(todoItem => this.todoItems.push(todoItem));
    }else{
      this.todoItemService.updateTodoItem(todoItemToSave).subscribe(result => this.todoItems.filter(
       ( todoItem =>this.isSameTodoItem(result, todoItem)
      ))[0].description = result.description);
    }

    this.selectedTodoItem  = null;
    this.todoForm.reset();
  }

  private isSameTodoItem(searchBy: TodoItem, lookingFor: TodoItem) {
    return searchBy.id === lookingFor.id;
  }

  deleteTodoItem(todoItemToRemove: TodoItem, event) {
    event.stopPropagation();

    this.todoItemService.deleteTodoItem(todoItemToRemove).subscribe(
      res => {
        this.todoItems = this.todoItems.filter(
          todoItem => todoItem.id !== todoItemToRemove.id
        )

        this.descriptionInput.nativeElement.focus();
      }
    )
  }

  selectTodoItem(todoItem: TodoItem) {
    this.selectedTodoItem = todoItem;
    this.todoForm.controls["item"].setValue(todoItem.description);
    this.descriptionInput.nativeElement.focus();
  }
}
