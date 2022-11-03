import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-decor-details',
  templateUrl: './decor-details.component.html',
  styleUrls: ['./decor-details.component.scss']
})
export class DecorDetailsComponent implements OnInit {
  product: any = {}
  add: boolean = false
  cartProduct: any[] = []
  quantity!: number
  
  constructor(private active: ActivatedRoute, private service: ProductsServiceService, private _ServiceService: ServiceService) {
    active.params.subscribe(param => {
      if (param['id']) {
        this.product = service.getDecorProductById(param['id'])
      }
    })
  }

  adds() {
    this.cartProduct = []
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item => item.item.id == this.product.id)
      if (exist) {
        alert("sorry this product already in your cart !")
      } else {
        this.cartProduct.push({ item: this.product, quantity: this.quantity })
        localStorage.setItem("cart", JSON.stringify(this.cartProduct))
      }
    } else {
      this.cartProduct.push({ item: this.product, quantity: this.quantity })
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }
    this._ServiceService.cart.next(this.cartProduct.length)
  }

  ngOnInit(): void {
  }

}
