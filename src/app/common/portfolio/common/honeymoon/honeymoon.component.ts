import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../../../common/shared/base.component';

@Component({
  selector: 'app-honeymoon',
  templateUrl: './honeymoon.component.html',
  styleUrls: ['./honeymoon.component.less']
})
export class HoneymoonComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get namePage(): string {
    return 'Madeira';
  }

  get navigation(): string {
    return 'Nasza podróż poślubna';
  }
}
