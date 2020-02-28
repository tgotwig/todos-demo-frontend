import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todos-demo-frontend';
  activeTab = 'todos';

  constructor(private router: Router) {
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
