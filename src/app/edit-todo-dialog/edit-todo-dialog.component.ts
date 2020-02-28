import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../interfaces';
import { DataService } from '../#services/data.service';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent {
  text: string;

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo,
    public dataService: DataService) {
    this.text = todo.text;
  }

  submit(e: Event) {
    e.preventDefault();

    const text = this.text;
    this.dataService.editTodo({ ...this.todo, text });
    this.dialogRef.close();
  }

  cancel(e: Event) {
    e.preventDefault();
    this.dialogRef.close();
  }
}
