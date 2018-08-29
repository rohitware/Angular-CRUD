import { Component, OnInit } from '@angular/core';
//import {MatMenuModule} from '@angular/material/menu';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'items', title: 'Items',  icon:'shopping_basket', class: '' },
    { path: 'item-list', title: 'Item List',  icon:'shopping_basket', class: '' },
    { path: 'modifiers', title: 'Modifiers',  icon:'border_color', class: '' },
    { path: 'create-modifier', title: 'CreateModifiers',  icon:'create', class: '' },
    { path: 'categories', title: 'Categories',  icon:'line_weight', class: '' },
    { path: 'create-categories', title: 'Create Categories',  icon:'create', class: '' },
    { path: 'discount', title: 'Discount',  icon:'file_download', class: '' },
    { path: 'create-discount', title: 'CreateDiscount',  icon:'file_download', class: '' },
    { path: 'employees', title: 'Employees',  icon:'work', class: '' },
    { path: 'create-employee', title: 'Create Employee',  icon:'work', class: '' },
    { path: 'customers', title: 'Customers',  icon:'group', class: '' },
    { path: 'create-customer', title: 'Create-customer',  icon:'group', class: '' },
    { path: 'feedback', title: 'Feedback',  icon:'feedback', class: '' },
    { path: 'create-notifications', title: 'CreateNotifications',  icon:'notifications', class: '' },



       


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  name = 'Angular 5';
  objectKeys = Object.keys;

  my_menu = {
    'main1': ['sub1', 'sub2'],
    'main2': ['sub1', 'sub2', 'sub3'],
  };
  
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
