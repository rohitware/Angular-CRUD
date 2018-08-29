import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer';


@Injectable()
export class CustomersService {
  private customer = new Customer();

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  getCustomers() {
    return this._http.get('http://localhost:8080/api/customers/').pipe(
      map((response: Response) => response.json()));
  }

  postCustomer(customer) {
    return this._http.post('http://localhost:8080/api/customers/', customer).pipe(
      map(res=>res));
  }

  deleteCustomer(_id:string){
    return this._http.delete('http://localhost:8080/api/customers/'+_id).pipe(
      map(res=>res)
    )
  }

  editCustomer(customerID){
    console.log(customerID);

    return this._http.put('http://localhost:8080/api/customers/' + customerID, JSON.stringify(this.customer), this.options).map((response: Response) => response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }

  setter(customer: Customer){
    this.customer = customer;
  }

  getter(){
    return(this.customer);
  }
}
