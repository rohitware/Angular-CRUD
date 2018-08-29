import { Component, OnInit } from '@angular/core';
import { Discount } from '../models/discount';
import { DiscountService } from '../services/discount.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-discount',
  templateUrl: './create-discount.component.html',
  styleUrls: ['./create-discount.component.scss']
})
export class CreateDiscountComponent implements OnInit {
  private discount: Discount;

  constructor(private discountService: DiscountService, private _router: Router) { }

  ngOnInit() {
    this.discount = this.discountService.getter();
  }


  savediscount() {
    if (this.discount._id == undefined) {
      this.discountService.addDiscount(this.discount).subscribe(discount => {
        (this.discount);
        this._router.navigate(['/discount']);

      });
    }
    else {
      this.discountService.editDiscount(this.discount._id).subscribe(discount => {
        console.log(discount);
        (this.discount);
        this._router.navigate(['/discount']);

      });
    }
  }
}
