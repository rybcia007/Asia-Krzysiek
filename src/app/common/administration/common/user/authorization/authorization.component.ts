import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './../../../models/productModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit {

  products: Array<Product>;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {

    this.http.get('http://www.skazaninasiebie.pl/api/read.php').subscribe(res => {
      // console.log(data);

    },
    (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
    });
  }
}
