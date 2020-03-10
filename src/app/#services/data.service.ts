import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [];

  constructor(private httpService: HttpService) {
    httpService.getTodos().then(todos => this.todos = todos);
  }

  createTodo(text: string) {
    this.httpService.putTodo(text)
      .then(receivedTodo => {
        this.todos = [...this.todos, receivedTodo];
      });
  }

  removeTodo({ id }: Todo) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }

  editTodo({ id, text }: Todo) {
    this.httpService.updateTodo({ id, text })
      .then((receivedTodo) => {
        this.todos = this.todos.map(todo => {
          if (todo.id === receivedTodo.id) {
            return {
              ...todo, text
            };
          } else {
            return todo;
          }
        });
      });
  }

  getTodos() {
    return this.todos;
  }
}
