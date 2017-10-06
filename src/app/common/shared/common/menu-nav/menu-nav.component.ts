import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.less']
})
export class MenuNavComponent implements OnInit {

  @Input() itemName: string;
 

  constructor() { }

  ngOnInit() {
  }

}
