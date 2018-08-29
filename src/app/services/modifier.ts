import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Modifier } from '../models/modifier';


@Injectable()
export class ModifierService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });


  private modifier = new Modifier();

  private _url = 'http://localhost:8080/api/modifiers/';
  constructor(private _http: Http) { }

  getModifier() {
    return this._http.get('http://localhost:8080/api/modifiers/').pipe(
      map((response: Response) => response.json()));
  }

  addModifier(modifier) {
    return this._http.post('http://localhost:8080/api/modifiers/', modifier).pipe(
      map(res => res));
  }

  editModifier(modifier: any) {
    console.log(modifier);

    return this._http.put('http://localhost:8080/api/modifiers/' + modifier, JSON.stringify(this.modifier), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteModifier(_id: string) {
    return this._http.delete('http://localhost:8080/api/modifiers/' + _id).pipe(
      map(res => res)
    )
  }


  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }

  setter(modifier: Modifier) {
    this.modifier = modifier;
  }

  getter() {
    return (this.modifier);
  }

}




