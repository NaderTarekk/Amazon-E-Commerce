import { Component, ViewEncapsulation } from '@angular/core';
import { ProductsServiceService } from './main/service/products-service.service';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { CartComponent } from './main/components/cart/cart.component';
import { BehaviorSubject } from 'rxjs';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'amazon';
  mainProducts: any[] = []

  constructor(private service: ProductsServiceService, private cart: CartComponent) {
    this.mainProducts = this.service.mainProducts()
  }

  
}
