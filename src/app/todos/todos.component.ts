import { Component } from '@angular/core';
import { DataService } from '../#services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  constructor(public dataService: DataService) { }
}
