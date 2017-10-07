import { ItemPicture } from './../../models/portfolioModels';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../../../common/shared/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent extends BaseComponent implements OnInit {

  sliderPicture: Array<ItemPicture> = [];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.sliderPicture = [
      new ItemPicture('assets/picture/slider_1.jpg', ''),
      new ItemPicture('assets/picture/slider_2.jpg', ''),
      new ItemPicture('assets/picture/slider_5.jpg', ''),
      new ItemPicture('assets/picture/slider_4.jpg', ''),
      new ItemPicture('assets/picture/slider_7.jpg', ''),
      new ItemPicture('assets/picture/slider_6.jpg', ''),
      new ItemPicture('assets/picture/slider_3.jpg', ''),
      new ItemPicture('assets/picture/slider_8.jpg', ''),
    ];
  }

}


//  <div class="item active" style="background-image: url('assets/picture/slider_1.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_2.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_5.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_4.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_7.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_6.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_3.jpg');">
//         </div>
//         <div class="item" style="background-image: url('assets/picture/slider_8.jpg');">
//         </div>