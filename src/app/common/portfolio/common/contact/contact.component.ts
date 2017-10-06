import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/shared/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get namePage(): string {
    return 'Masz pytania?';
  }

  get navigation(): string {
    return 'Kontakt';
  }
}
