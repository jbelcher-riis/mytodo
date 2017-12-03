import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {TodoItem} from '../models/todo-item';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TodoItemService {

  constructor(private http: Http) { }

  private baseUrl = '/api/v1/todo-item';

  saveTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post(this.baseUrl, todoItem)
      .map((res: Response)=>res.json());
  }

  getTodoItems(): Observable<TodoItem[]> {
    return this.http.get(this.baseUrl)
      .map((res: Response) => res.json());
  }
}
