import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/shared/base.component';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.less']
})
export class RelationshipComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get namePage(): string {
    return 'Wasze wspomnienia';
  }

  get navigation(): string {
    return 'Relacje gości';
  }
}
