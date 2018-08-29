import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../models/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  private notifications: Notification[];
  constructor(private _notificationService: NotificationsService, private _router: Router) { }

  ngOnInit() {
    this._notificationService.getNotifications()
      .subscribe(data => this.notifications = data);
  }

  doDelete(notification) {
    this._notificationService.deleteNotification(notification._id).subscribe(data => {
      this.notifications.splice(this.notifications.indexOf(notification), 1);
    })
  }

  editNotification(notification) {
    this._notificationService.setter(notification);
    this._router.navigate(['/create-notifications']);

  }

  newNotification(){
    let notification = new Notification();
    this._notificationService.setter(notification);
    this._router.navigate(['/create-notifications']);
  }

}
