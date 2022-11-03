import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Electronics } from '../../service/electro';
import { ProductsServiceService } from '../../service/products-service.service';

// SwiperCore.use{}
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  electronics: Electronics[] = []
  fashions: Electronics[] = []
  decors: Electronics[] = []
  toys: Electronics[] = []
  populars: any[] = []
  cares: any[] = []
  toys2: any[] = []
  decors2: any[] = []
  mainProducts: any[] = []
  constructor(private service: ProductsServiceService) { }

  ngOnInit(): void {
    this.electronics = this.service.electronicsBox()
    this.fashions = this.service.fashionBox()
    this.decors = this.service.decorBox()
    this.toys = this.service.toyBox()
    this.populars = this.service.popular()
    this.cares = this.service.care()
    this.toys2 = this.service.toys()
    this.decors2 = this.service.decors()
    this.mainProducts = this.service.mainProducts()
  }
}
