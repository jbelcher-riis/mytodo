import { Component, OnInit } from '@angular/core';
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

  private createForm() {
    this.todoForm = this.formBuilder.group({
      item: ''
    })
  }

  todoForm: FormGroup;
  todoItems: TodoItem[] = [];

  ngOnInit() {
  }

  onSubmit(model) {
    const todoItemToSave: TodoItem = {
      id: null,
      description: model.item
    }
    this.todoItemService.saveTodoItem(todoItemToSave).subscribe(todoItem => this.todoItems.push(todoItem));

    this.todoForm.reset();
  }

}
