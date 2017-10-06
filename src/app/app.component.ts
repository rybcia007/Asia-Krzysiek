import { Component, OnInit, Injector, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ROUTES_PATHS } from '../app/app.path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, OnDestroy {

  protected subscribers: any[] = [];
  title = 'Joanna & Krzysztof';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscribers.forEach(_ => _.unsubscribe());
  }
}
