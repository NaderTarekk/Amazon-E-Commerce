import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { DecorComponent } from './components/decor/decor.component';
import { ToysComponent } from './components/toys/toys.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { ElectronicsDetailsComponent } from './components/electronics-details/electronics-details.component';
import { FashionDetailsComponent } from './components/fashion-details/fashion-details.component';
import { DecorDetailsComponent } from './components/decor-details/decor-details.component';
import { ToyDetailsComponent } from './components/toy-details/toy-details.component';
import { FormComponent } from './components/form/form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    ProductsComponent,
    ElectronicsComponent,
    FashionComponent,
    DecorComponent,
    ToysComponent,
    ProductDetailsComponent,
    CartComponent,
    ElectronicsDetailsComponent,
    FashionDetailsComponent,
    DecorDetailsComponent,
    ToyDetailsComponent,
    FormComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // SharedModule,
    SwiperModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  exports: [ProductsComponent, CartComponent, FormComponent],
  providers: [CartComponent]
})
export class MainModule { }
