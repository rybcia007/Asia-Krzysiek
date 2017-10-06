import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.less']
})
export class TitlePageComponent implements OnInit {

  @Input() itemName: string;
 
  constructor() { }

  ngOnInit() {
  }

}
