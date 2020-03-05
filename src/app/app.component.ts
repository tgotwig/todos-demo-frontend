import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DataService } from './#services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todos-demo-frontend';
  activeTab = 'todos';

  constructor(
    private router: Router,
    private dataService: DataService) {
    this.router.events.subscribe((e: RouterEvent) => {
      if (e.url) {
        switch (e.url) {
          case '/todos': this.activeTab = 'todos'; break;
          case '/create': this.activeTab = 'create'; break;
        }
      }
    });
  }

  ngOnInit() {

  }
}
