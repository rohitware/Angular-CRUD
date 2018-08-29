import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';


@Injectable()
export class CategoriesService {
  private category = new Category;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }



  getCategories() {
    return this._http.get('http://localhost:8080/api/categories/').pipe(
      map((response: Response) => response.json()));
  }


  addCategory(categories) {
    return this._http.post('http://localhost:8080/api/categories/', categories).pipe(
      map((response: Response) => response.json()));
  }

  deleteCategories(_id: string) {
    return this._http.delete('http://localhost:8080/api/categories/' + _id).pipe(
      map(res => res)
    )
  }


  doUpdate(category: any) {
    console.log(category);

    return this._http.put('http://localhost:8080/api/categories/' + category, JSON.stringify(this.category), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }


  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }


  setter(category: Category) {
    this.category = category;
  }

  getter() {
    return this.category;
  }



}
