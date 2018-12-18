import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs/Subscription';
import {ProductModel} from '../../models/product.model';
import {DataTableResource} from 'angular-4-data-table';
import {count} from 'rxjs/operator/count';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: ProductModel[];
  subscription: Subscription;
  tableResource: DataTableResource<ProductModel>;
  items: ProductModel[]=[];
  itemsCount: number;

  constructor(private productService: ProductService) {
    console.log('Inside contructor');
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.initializeTable(products);
      });


  }


  private initializeTable(products: ProductModel[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items);

    this.tableResource.count()
      .then(count => this.itemsCount = count);

  }

  reloadItems(params){

    if (!this.tableResource) return ;
    this.tableResource.query(params)
      .then(items => this.items = items);
  }


  filter(query: string) {
    console.log('search', query);
    const filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

    this.initializeTable(filteredProducts);

    /*  if (query) {
        this.filteredProducts = this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
      } else {
        this.products;
      }*/
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

}
