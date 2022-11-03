import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cart:BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private http:HttpClient) {
    if(localStorage.getItem("cart") ) {
      const size = JSON.parse(localStorage.getItem("cart")!)
      this.cart.next(size.length)
    }
   }
  getAllCategories(){
    return ['electronics', 'fashion', 'home Decor', 'toys']
  }
}
