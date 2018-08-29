
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class ItemsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private item = new Item();

  constructor(private _http: Http) { }

  getItems() {
    return this._http.get('http://localhost:8080/api/items').pipe(
      map((response: Response) => response.json()));
  }


  deleteItem(_id: string) {
    return this._http.delete('http://localhost:8080/api/items/' + _id).pipe(
      map((response: Response) => response.json()));
  }

  
  addItem(item: Item) {

    return this._http.post('http://localhost:8080/api/items', JSON.stringify(item), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  // editItem(item) {
  //   return this._http.put('http://localhost:8080/api/items/', item).pipe(
  //     map((response: Response) => response.json()));
  // }

  editItem(item) {
    console.log(item);

    return this._http.put('http://localhost:8080/api/items/' + item, JSON.stringify(this.item), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }


  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }


  setter(item: Item) {
    this.item = item;
  }

  getter() {
    return this.item;
  }



}
