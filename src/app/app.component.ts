import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-shop';
  public product: any;

  constructor(private httpClient: HttpClient) {
  }

  public ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((products: any) => {
      console.log(products);
      this.product = products[0];
    });
  }
}
