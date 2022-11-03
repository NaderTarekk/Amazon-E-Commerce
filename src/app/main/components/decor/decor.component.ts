import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.scss']
})
export class DecorComponent implements OnInit {
  products: any[] = []
  constructor(private service: ProductsServiceService) { }

  ngOnInit(): void {
    this.products = this.service.decors()
  }

  getProducts() {
    this.products = this.service.decors()
    console.log(this.products)
  }
}
