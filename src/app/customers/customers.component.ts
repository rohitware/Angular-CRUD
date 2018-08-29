import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  private customers: Customer[];

  constructor(private _customersServices: CustomersService, private _router: Router) { }

  ngOnInit() {

    this._customersServices.getCustomers()
      .subscribe(Data => this.customers = Data);
  }

  doDelete(customer) {
    this._customersServices.deleteCustomer(customer._id).subscribe(data => {
      this.customers.splice(this.customers.indexOf(customer), 1);
    })
  }

  editCustomer(customer) {
    this._customersServices.setter(customer);
    this._router.navigate(['/create-customer']);
  }

  newCustomer() {
    let customer = new Customer();
    this._customersServices.setter(customer);
    this._router.navigate(['/create-customer']);
  }

}
