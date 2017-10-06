import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ROUTES_PATHS } from '../../app.path';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

export abstract class SubscriberComponent implements OnDestroy {

  protected subscribers: Subscription[] = [];
  protected timeouts: NodeJS.Timer[] = [];

  constructor() { }

  ngOnDestroy() {
    this.subscribers.forEach(_ => {
      if (_) {
        _.unsubscribe();
      }
    });
    this.subscribers = [];

    this.timeouts.forEach(_ => {
      if (_) {
        clearTimeout(_);
      }
    });
    this.timeouts = [];
  }
}
