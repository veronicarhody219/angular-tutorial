import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/data/products';
import { products } from 'src/app/data/product-info';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  addToCart(product: ProductInterface){
    this.cartService.addToCart(product)
    window.alert("Your product has been added to the cart")
  }
}
