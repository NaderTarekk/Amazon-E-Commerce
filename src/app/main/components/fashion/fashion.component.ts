import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {
  products: any[] = []
  categories = ["Men", "Women"]
  constructor(private service: ProductsServiceService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  changeSelected(event: any) {
    let value = event.target.value
    if (value == "All") {
      this.getProducts()
    } else {
      this.products = this.service.getCategoryOfFashion(value)
    }
  }

  getProducts() {
    this.products = this.service.fashion()
  }
}
