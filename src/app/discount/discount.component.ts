import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../services/discount.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { Discount } from '../models/discount';



@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

 private discounts: Discount [];

  constructor(private _discountService: DiscountService, private _router: Router) { }

  ngOnInit() {
    this._discountService.getDiscount()
      .subscribe(Data => this.discounts = Data);
  }

  doDelete(discount) {
    this._discountService.deleteDiscount(discount._id).subscribe(data => {
      this.discounts.splice(this.discounts.indexOf(discount), 1);
    })
  }


  editDiscount(discount) {
    this._discountService.setter(discount);
    this._router.navigate(['/create-discount'])

  }

  newDiscount(){
    let discount = new Discount();
    this._discountService.setter(discount);
    this._router.navigate(['/create-discount'])
  }

}
