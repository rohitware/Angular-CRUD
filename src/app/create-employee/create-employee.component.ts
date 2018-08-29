import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  private employee : Employee;

  constructor(private employeesService: EmployeesService, private _router: Router) { }

  role = ['Administrator', 'Manager', 'Cashier'];


  ngOnInit() {
    this.employee = this.employeesService.getter();
  }



  saveEmployee(){
    if(this.employee._id == undefined ){
    this.employeesService.postEmployees(this.employee).subscribe(employee=>{
      this._router.navigate(['/employees']);
    });
  }else{
    this.employeesService.editEmployee(this.employee._id).subscribe(employee=>{
      this._router.navigate(['/employees']);
   });

  }
}
}