import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
//import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CustomersComponent } from './customers/customers.component';
import { ItemsComponent } from './items/items.component';
import { ModifiersComponent } from './modifiers/modifiers.component';
import { CreateModifierComponent } from './create-modifier/create-modifier.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { DiscountComponent } from './discount/discount.component';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateNotificationsComponent } from './create-notifications/create-notifications.component';








const routes: Routes =[
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'table-list',           component: TableListComponent },
    { path: 'icons',                component: IconsComponent },
    // { path: 'maps',              component: MapsComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'modifiers',            component: ModifiersComponent },
    { path: 'create-modifier',      component: CreateModifierComponent },
    { path: 'categories',           component: CategoriesComponent },
    { path: 'create-categories',    component: CreateCategoriesComponent },
    { path: 'discount',             component: DiscountComponent },
    { path: 'create-discount',      component: CreateDiscountComponent },
    { path: 'items',                component: ItemsComponent },
    { path: 'item-list',            component: ItemListComponent },
    { path: 'employees',            component: EmployeesComponent },
    { path: 'create-employee',      component: CreateEmployeeComponent },
    { path: 'customers',            component: CustomersComponent },
    { path: 'create-customer',      component: CreateCustomerComponent },
    { path: 'feedback',             component: FeedbackComponent },
    { path: 'create-notifications', component: CreateNotificationsComponent },


    // { path: 'upgrade',       component: UpgradeComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
