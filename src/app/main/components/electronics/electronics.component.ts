import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
  products: any[] = []
  categories = ["Phones", "Laptops", "Accessories", "Electronics"]


  constructor(private service: ProductsServiceService) { }

  ngOnInit(): void {
    this.products = this.service.popular()
  }
  getAllProduct(){
    this.products = this.service.popular()
  }

  changeSelected(event: any) {
    let value = event.target.value
    if (value == "All") {
      this.getAllProduct()
    } else {
      this.products = this.service.getCategoryOfElectronics(value)
    }
  }
}


