import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/shared/base.component';

@Component({
  selector: 'app-timeTo',
  templateUrl: './timeTo.component.html',
  styleUrls: ['./timeTo.component.less']
})
export class TimeToComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getTime();
  }

  getTime() {
    var countDownDate = new Date("July 7, 2018 16:00:00").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timeLeftForWedding").innerHTML =
        +days + " dni " + hours + " godzin " + minutes + " minut " + seconds + " sekund";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeLeftForWedding").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

}
