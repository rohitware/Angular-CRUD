import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';

import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CustomersComponent } from './customers/customers.component';
import { ItemsComponent } from './items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { ModifiersComponent } from './modifiers/modifiers.component';
import { CreateModifierComponent } from './create-modifier/create-modifier.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { DiscountComponent } from './discount/discount.component';
import { CreateDiscountComponent } from './create-discount/create-discount.component';
import { ModifierService } from './services/modifier';
import {CategoriesService} from './services/categories.service';
import { ItemListComponent } from './item-list/item-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateNotificationsComponent } from './create-notifications/create-notifications.component';
import { ItemsService } from './services/items.service';
import { DiscountService } from './services/discount.service';
import { EmployeesService } from './services/employees.service';
import { CustomersService } from './services/customers.service';
import { NotificationsService } from './services/notifications.service';
import { FeedbackService } from './services/feedback.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    // MapsComponent,
    NotificationsComponent,
    // UpgradeComponent,
    EmployeesComponent,
    FeedbackComponent,
    CustomersComponent,
    ItemsComponent,
    ModifiersComponent,
    CreateModifierComponent,
    CategoriesComponent,
    CreateCategoriesComponent,
    DiscountComponent,
    CreateDiscountComponent,
    ItemListComponent,
    CreateEmployeeComponent,
    CreateCustomerComponent,
    CreateNotificationsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ModifierService, CategoriesService, ItemsService, DiscountService, EmployeesService, CustomersService, NotificationsService, FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
