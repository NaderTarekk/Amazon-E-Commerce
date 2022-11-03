import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './main/components/cart/cart.component';
import { DecorDetailsComponent } from './main/components/decor-details/decor-details.component';
import { DecorComponent } from './main/components/decor/decor.component';
import { ElectronicsDetailsComponent } from './main/components/electronics-details/electronics-details.component';
import { ElectronicsComponent } from './main/components/electronics/electronics.component';
import { FashionDetailsComponent } from './main/components/fashion-details/fashion-details.component';
import { FashionComponent } from './main/components/fashion/fashion.component';
import { FormComponent } from './main/components/form/form.component';
import { ProductDetailsComponent } from './main/components/product-details/product-details.component';
import { ProductsComponent } from './main/components/products/products.component';
import { SignUpComponent } from './main/components/sign-up/sign-up.component';
import { ToyDetailsComponent } from './main/components/toy-details/toy-details.component';
import { ToysComponent } from './main/components/toys/toys.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'search/electronics', component: ElectronicsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'Edetails/:id', component: ElectronicsDetailsComponent },
  { path: 'Fdetails/:id', component: FashionDetailsComponent },
  { path: 'Ddetails/:id', component: DecorDetailsComponent },
  { path: 'Tdetails/:id', component: ToyDetailsComponent },
  { path: 'search/fashion', component: FashionComponent },
  { path: 'search/home Decor', component: DecorComponent },
  { path: 'search/toys', component: ToysComponent },
  { path: 'cart', component: CartComponent },
  { path: 'form', component: FormComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
