import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  shePhone = '506-077-333';
  hePhone = '512-626-155';

  constructor() { }

  ngOnInit() {
  }

}
