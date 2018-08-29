import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-notifications',
  templateUrl: './create-notifications.component.html',
  styleUrls: ['./create-notifications.component.scss']
})
export class CreateNotificationsComponent implements OnInit {

  constructor(private _notificationsService: NotificationsService, private _router: Router) { }

  private notification: Notification;

  ngOnInit() {
    this.notification = this._notificationsService.getter();
  }


  saveNotification() {
    if (this.notification._id == undefined) {
      this._notificationsService.postNotification(this.notification).subscribe(notification => {
        this._router.navigate(['/notifications']);
      });
    } else {
      this._notificationsService.editNotification(this.notification._id).subscribe(notification =>{
        this._router.navigate(['/notifications'])
      });

    }
  }



}
