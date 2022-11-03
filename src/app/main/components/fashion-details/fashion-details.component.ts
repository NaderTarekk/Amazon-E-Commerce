import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-fashion-details',
  templateUrl: './fashion-details.component.html',
  styleUrls: ['./fashion-details.component.scss']
})
export class FashionDetailsComponent implements OnInit {
  product: any = {}
  add: boolean = false
  cartProducts: any[] = []
  quantity!:number
  constructor(private service: ProductsServiceService, private active: ActivatedRoute, private _ServiceService:ServiceService) {
    active.params.subscribe(params => {
      if (params['id']) {
        this.product = this.service.getFashionProductById(params['id'])
      }
    })
  }

  ngOnInit(): void {
  }

  adds() {
    this.cartProducts = []
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == this.product.id)
      if (exist) {
        alert("Product already in your cart !")
      } else {
        this.cartProducts.push({ item: this.product, quantity: this.quantity })
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }
    } else {
      this.cartProducts.push({ item: this.product, quantity: this.quantity })
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
    this._ServiceService.cart.next(this.cartProducts.length)
  }
}
