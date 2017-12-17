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
  todoItems: TodoItem[] = [];

  ngOnInit() {
    this.todoItemService.getTodoItems().subscribe(
      todoItems => this.todoItems = todoItems
    );
  }

  onSubmit(model) {
    const todoItemToSave: TodoItem = {
      id: null,
      description: model.item
    }
    this.todoItemService.saveTodoItem(todoItemToSave).subscribe(todoItem => this.todoItems.push(todoItem));

    this.todoForm.reset();
  }

  deleteTodoItem(todoItemToRemove: TodoItem) {
    this.todoItemService.deleteTodoItem(todoItemToRemove).subscribe(
      res => {
        this.todoItems = this.todoItems.filter(
          todoItem => todoItem.id !== todoItemToRemove.id
        )

        this.descriptionInput.nativeElement.focus();
      }
    )
  }
}
