import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'app/services/employees.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  private employees: Employee[];

  constructor(private _employeesService: EmployeesService, private _router: Router) { }

  ngOnInit() {

    this._employeesService.getEmployees()
      .subscribe(Data => this.employees = Data);
  }


  doDelete(employee) {
    this._employeesService.deleteEmployee(employee._id).subscribe(data => {
      this.employees.splice(this.employees.indexOf(employee), 1);
    })
  }

  editEmployee(employee) {
    this._employeesService.setter(employee);
    this._router.navigate(['/create-employee'])
  }

  newEmployee(){
    let employee = new Employee();
    this._employeesService.setter(employee);
    this._router.navigate(['/create-employee'])

  }


}
