import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ROUTES_PATHS } from '../../app.path';
import { Router } from '@angular/router';
import { SubscriberComponent } from './subscriber.component';

export abstract class BaseComponent extends SubscriberComponent implements OnInit, OnDestroy {

    titleCard: string;
    protected router: Router;

    constructor(injector: Injector) {
        super();
        this.router = injector.get(Router) as Router;
    }

    ngOnInit() {
        this.lockScreen(false);
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '0px';
        // $('.modal-backdrop').remove();
    }

    public navigate(path: string, base?: string, args?: string): void {
        let add = './';
        if (base) {
            add += `${base}/`;
        }
        add += `${path}`;
        if (args) {
            add += `/${args}`;
        }
        this.router.navigate([add]);
    }

    public newTab(path: string, base?: string, args?: string): void {
        let add = './#/';
        if (base) {
            add += `${base}/`;
        }
        add += `${path}`;
        if (args) {
            add += `/${args}`;
        }
        window.open(add);
    }

    public openLink(newTab: boolean, path: string, base?: string, args?: string): void {
        if (newTab) {
            this.newTab(path, base, args);
        } else {
            this.navigate(path, base, args);
        }
    }

    public navigateToLogin() {
        // this.navigate(ROUTES_PATHS.Accounts.autorization, ROUTES_PATHS.Accounts.base);
    }


    public lockScreen(locked: boolean) {
        if (locked) {
            // $.globalEval('$(\'#lock\').modal({backdrop: \'static\',keyboard: false});');
        } else {
            // $.globalEval('$(\'#lock\').modal(\'hide\');');
        }
    }
}
