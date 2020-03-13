import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import { HttpService } from './http.service';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [];
  initialResponseArrived = false;

  constructor(private httpService: HttpService) {
    httpService.getTodos().then(todos => {
      this.todos = todos;
      this.initialResponseArrived = true;
    });
  }

  createTodo(text: string, http: boolean) {
    if (http) {
      this.httpService.putTodo(text)
        .then(receivedTodo => {
          this.todos = [...this.todos, receivedTodo];
        });
    } else {
      const newTodo = { id: Guid.create().toString(), text };
      this.todos = [...this.todos, newTodo];
      return newTodo;
    }
  }

  removeTodo(todoId: string, http: boolean): Todo[] {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    if (http) {
      this.httpService.removeTodo(todoId);
    }
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
