import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ProductsServiceService } from '../../service/products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []
  total: number = 0
  success: boolean = false
  @Output() numberOfProducts = new EventEmitter()
  constructor(private service: ProductsServiceService,private _services:ServiceService) { }
  numberProducts(){
    this.numberOfProducts.emit(this.cartProducts.length)
  }
  ngOnInit(): void {
    this.getProducts()
    this.totalPrice()

    const subject = new BehaviorSubject(this.cartProducts.length)
    subject.subscribe(x=>{
      console.log(x)
    })
  }

  getProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.totalPrice()
  }

  clearAll() {
    this.cartProducts = []
    localStorage.removeItem("cart")
    this.totalPrice()
    this._services.cart.next(null)
  }

  totalPrice() {
    this.total = 0
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
  }

  plus(index: any) {
    this.cartProducts[index].quantity++
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  mins(index: any) {
    if (this.cartProducts[index].quantity < 2) {
      this.totalPrice()
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.deleteProduct(this.cartProducts[index]);
    } else {
      this.cartProducts[index].quantity--
      this.totalPrice()
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

  deleteProduct(index: any) {
    this.cartProducts.splice(index, 1)
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
   if(this.cartProducts.length) {
    this._services.cart.next(this.cartProducts.length)
   }else {
    this._services.cart.next(null)
   }
  }
  detectChanges() {
    this.totalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  order() {
    let products = this.cartProducts.map(item => {
      return { productId: item.item.id, quantity: item.quantity }
    })
    let model = {
      userId: 6,
      date: new Date(),
      products: products
    }
    setTimeout(() => {
      this.success = true
      setTimeout(() => {
        this.success = false
      }, 5000);
    }, 2000);

    console.log(model)
  }

}

