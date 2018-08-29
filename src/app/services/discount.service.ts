import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Discount } from '../models/discount';



@Injectable()
export class DiscountService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private discount = new Discount();

  constructor(private _http: Http) { }

  getDiscount() {
    return this._http.get('http://localhost:8080/api/discounts').pipe(
      map((response: Response) => response.json()));

  }

  addDiscount(discount){
    return this._http.post('http://localhost:8080/api/discounts', discount).pipe(
      map((response: Response) => response.json()));
  
  }

  deleteDiscount(_id:string){
    return this._http.delete('http://localhost:8080/api/discounts/'+_id).pipe(
      map(res=>res)
    )
  }

  editDiscount(discount: any) {
    console.log(discount);

    return this._http.put('http://localhost:8080/api/discounts/' + discount, JSON.stringify(this.discount), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }

  setter(discount: Discount){
    this.discount = discount;

  }


  getter(){
    return this.discount;
  }

}
