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
      console.log(res);
    });

    this.getTodos();
  }

  

}
