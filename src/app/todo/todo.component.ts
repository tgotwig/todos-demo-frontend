import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces';
import { DataService } from '../#services/data.service';
import { HttpService } from '../#services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private httpService: HttpService) { }

  removeTodo() {
    this.httpService.removeTodo(this.todo.id)
      .then(todos => this.dataService.todos = todos);
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '250px',
      data: this.todo
    });
  }
}
