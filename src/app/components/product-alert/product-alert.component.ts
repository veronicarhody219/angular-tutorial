import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductInterface } from 'src/app/data/products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: ProductInterface;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
