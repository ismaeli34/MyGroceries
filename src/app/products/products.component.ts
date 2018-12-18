import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];
  category: string;
  filteredProducts: ProductModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
   ) {
    this.productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;

      });

  }

  ngOnInit() {
  }

}
