
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FeedbackService {

  constructor(private _http: Http) { }

  getfeedback(){
    return this._http.get('http://localhost:8080/api/feedbacks/').pipe(

    map((response: Response) => response.json()));
  }
}
