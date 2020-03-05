import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces';

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient) { }

  async getTodos(): Promise<Todo[]> {
    return await this.http.get<Todo[]>(`${URL}/todos`)
      .toPromise();
  }

  async removeTodo(id: string): Promise<Todo[]> {
    return this.http.delete<Todo[]>(`${URL}/todo/${id}`).toPromise();
  }

  async updateTodo({ id, text }: Todo): Promise<Todo> {
    return this.http.post<Todo>(`${URL}/todo/${id}`, {
      text
    }).toPromise();
  }

  async putTodo(text: string): Promise<Todo> {
    return this.http.put<Todo>(`${URL}/todo`, {
      text
    }).toPromise();
  }
}
