import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  product: ProductModel = new ProductModel();
  id;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private productService: ProductService) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => {
        this.product = p;
        console.log('p', p);
        console.log('Product ->', this.product);
      });
    }

  }

  ngOnInit() {
  }


  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
      console.log(product);
    }

  }


  delete(): void {
    if(confirm('Are you sure you want to delete this product')){
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
    else {
      this.router.navigate(['/admin/products']);

    }

  }

}
