import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces';
import { DataService } from '../#services/data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    private dialog: MatDialog) { }

  removeTodo(todoId: string = this.todo.id, http = true): Todo[] {
    return this.dataService.removeTodo(todoId, http);
  }

  openDialog(todo: Todo = this.todo): MatDialogRef<EditTodoDialogComponent> {
    return this.dialog.open(EditTodoDialogComponent, {
      width: '250px',
      data: todo
    });
  }
}
