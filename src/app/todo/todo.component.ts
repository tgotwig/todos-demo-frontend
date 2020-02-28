import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces';
import { DataService } from '../#services/data.service';
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
    public dataService: DataService,
    public dialog: MatDialog) { }

  removeTodo() {
    this.dataService.removeTodo(this.todo);
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '250px',
      data: this.todo
    });
  }
}
