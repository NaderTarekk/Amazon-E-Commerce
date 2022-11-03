import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-toy-details',
  templateUrl: './toy-details.component.html',
  styleUrls: ['./toy-details.component.scss']
})
export class ToyDetailsComponent implements OnInit {
  product: any = {}
  add: boolean = false
  cartProducts: any[] = []
  quantity!:number
  constructor(private active: ActivatedRoute, private service: ProductsServiceService, private _ServiceService:ServiceService) {
    active.params.subscribe(param => {
      if (param['id']) {
        this.product = service.getToyProductById(param['id'])
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
