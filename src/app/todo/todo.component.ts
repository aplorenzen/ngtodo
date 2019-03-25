import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todoTask: string;
  todoDone: boolean;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  addTodo() {
    const newTodo: Todo = { _id: null, task: this.todoTask, done: this.todoDone };
    this.todoService.createTodo(newTodo).subscribe((res) => {
      this.todos.push(res);
    });
  }

  onCheckboxChange(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe((res) => {
      console.log(res);
    });
  }

  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodoById(todo._id).subscribe((res) => {
      this.todos = this.todos.filter(obj => obj !== todo);
    });
  }
}
