import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Notification } from '../models/notification';

@Injectable()
export class NotificationsService {
  private notification = new Notification();


  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }

  getNotifications() {
    return this._http.get('http://localhost:8080/api/notifications/').pipe(
      map((response: Response) => response.json()));
  }

  postNotification(notification) {
    return this._http.post('http://localhost:8080/api/notifications/', notification).pipe(
      map(res => res));
  }

  deleteNotification(notificationID) {
    return this._http.delete('http://localhost:8080/api/notifications/' + notificationID).pipe(
      map(res => res)
    )
  }

  editNotification(notification) {
    console.log(notification);

    return this._http.put('http://localhost:8080/api/notifications/' + notification, JSON.stringify(this.notification), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }

  setter(notification: Notification) {
    this.notification = notification;
  }

  getter() {
    return (this.notification);
  }


}
