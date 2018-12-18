import {environment} from './../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataTableModule } from 'angular-4-data-table';
import {AppComponent} from './app.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {LoginComponent} from './login/login.component';
import {AuthguardService} from './services/authguard.service';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';
import {CategoryService} from './services/category.service';
import {ProductFormComponent} from './admin/product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from './services/product.service';
import {CustomFormsModule} from 'ng2-validation';
import {ProductFilterComponent} from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ShoppingCartService} from './services/shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DataTableModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthguardService]},
      {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthguardService]},
      {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthguardService]},


      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthguardService]},
      {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthguardService]},

      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthguardService]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthguardService]}
    ])
  ],
  providers: [
    AuthguardService,
    UserService,
    AuthService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
