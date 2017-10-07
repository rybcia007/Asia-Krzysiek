import { Component, Input, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/shared/base.component';

@Component({
  selector: 'app-title-page',
  templateUrl: './titlePage.component.html',
  styleUrls: ['./titlePage.component.less']
})
export class TitlePageComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  @Input() itemName: string;

}
