import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from 'src/app/main/components/cart/cart.component';
import { FormComponent } from 'src/app/main/components/form/form.component';
import { ProductsServiceService } from 'src/app/main/service/products-service.service';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: any[] = []
  appear: boolean = false
  constructor(private service: ServiceService, private router: Router, private cart: CartComponent, private api: ProductsServiceService) {
    this.subject()
  }
  productNumbers: any[] = []


  cartNumber: number = 0;
  searchText: any

  search() {
    this.router.navigateByUrl('/search/' + this.searchText)
  }
  ngOnInit(): void {
    this.categories = this.service.getAllCategories()
    this.getNumber()

    this.service.cart.subscribe({
      next: response => {
        this.cartNumber = response;
      }
    })

  }
  getNumber() {
    if ("cart" in localStorage) {
      this.productNumbers = JSON.parse(localStorage.getItem("cart")!)
    }
  }
  change(event: any) {
    console.log(event.target.value)
  }

  changeCategory(event: any) {
    let value = event.target.value
    this.router.navigateByUrl("/search/" + value)
    console.log(value)
  }

  subject() {
    const subject = new BehaviorSubject(this.cart.cartProducts.length);
    subject.subscribe(x => {
      // console.log(x)
    })
    // subject.next(this.cart.cartProducts.length)
    // subject.next(2)
    // subject.subscribe(x => {
    //   console.log(x)
    // })
  }
}
