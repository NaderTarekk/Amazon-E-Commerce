import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent implements OnInit {
  products: any[] = []
  constructor(private service: ProductsServiceService) {
    this.products = this.service.toys()
  }

  ngOnInit(): void {
  }

}
