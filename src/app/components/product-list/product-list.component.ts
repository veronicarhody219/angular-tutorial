import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/data/products';
import { products } from 'src/app/data/product-info';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: ProductInterface[] = products;
  constructor() {}

  ngOnInit(): void {}
  share() {
    window.alert('product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
