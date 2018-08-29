import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  private customer: Customer;

  constructor(private customersService: CustomersService, private _router: Router) { }


  ngOnInit() {
    this.customer = this.customersService.getter();
  }

  saveCustomer(){
    if(this.customer._id == undefined){
      this.customersService.postCustomer(this.customer).subscribe(customer=>{
      this._router.navigate(['/customers']);
    });
  }else{
    this.customersService.editCustomer(this.customer._id).subscribe(customer=>{
      this._router.navigate(['/customers'])
    })

    }
    
  }



}
