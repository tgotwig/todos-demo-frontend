import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import hri from 'human-readable-ids';

type Item = Todo;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [];

  constructor() { }

  createTodo(text: string, todos: Todo[] = this.todos): {
    todo: Todo, todos: Todo[]
  } {
    const todo: Todo = {
      id: this.createUniqueId(todos),
      text
    };
    this.todos = this.appendTodo(todo);
    return { todo, todos: this.todos };
  }

  removeTodo({ id }: Todo) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }

  editTodo(editedTodo: Todo) {
    const todos = this.todos.map(todo => {
      if (todo.id === editedTodo.id) {
        return {
          ...todo, text: editedTodo.text
        };
      } else {
        return todo;
      }
    });
    this.todos = todos;
    return todos;
  }

  getTodos() {
    return this.todos;
  }

  private appendTodo(todo: Todo): Todo[] {
    return [...this.todos, todo];
  }

  private createUniqueId = (arr: Item[]): string => {
    let newId: string;
    while (true) {
      newId = hri.hri.random();
      const leftStacks = arr.filter(e => e.id === newId);
      if (leftStacks.length === 0) { return newId; }
    }
  }
}
