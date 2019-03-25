import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL = 'http://localhost:5000';

  todos: Todo[] = [];

  constructor(private httpClient: HttpClient) { }

  public createTodo(todo: Todo) {
    return this.httpClient.put<Todo>(`${this.apiURL}/todos/1`, todo);
  }

  public updateTodo(todo: Todo) {
    return this.httpClient.post(`${this.apiURL}/todos`, todo);
  }

  public deleteTodoById(id: string) {
    return this.httpClient.delete(`${this.apiURL}/todos/${id}`);
  }

  public getTodoById(id: string) {
    return this.httpClient.get(`${this.apiURL}/todos/${id}`);
  }

  public getTodos(url?: string) {
    return this.httpClient.get<Todo[]>(`${this.apiURL}/todos`);
  }
}
