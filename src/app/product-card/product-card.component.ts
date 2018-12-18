import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {ShoppingCartService} from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  @Input('showActions') showActions = true;

  constructor( public cartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  /**
   * This method is used to add product to cart
   * 1. check if cartId is present in browser
   * 2. If cartId is not present create a product and store it in browser local storage.
   * @param product
   */
  addToCart(product: ProductModel) {

    let cart= this.cartService.getOrCreateCart();
    // this.cartService.addToCart(product);



  }

}
