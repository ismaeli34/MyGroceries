import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {
  }


   create() {

    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });

  }

   getCart(cartId: string) {

    return this.db.object('/shopping-carts/' + cartId);

  }

   async getOrCreateCart() {

    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return this.getCart(result.key);
    }
    return this.getCart(cartId);
  }

  addToCart(product: ProductModel){


  }

}
