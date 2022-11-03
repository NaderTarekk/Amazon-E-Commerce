import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any = {}
  id: any
  quantity: number = 0
  added: boolean = false
  cartProducts: any[] = []
  constructor(private activated: ActivatedRoute, private service: ProductsServiceService, private _ServiceService:ServiceService) {
    activated.params.subscribe(params => {
      if (params['id']) {
        this.product = service.getProductById(params['id'])
      }
    })
  }

  ngOnInit(): void {
  }

  add() {
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
