
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
import { Http, Response, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class EmployeesService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private employee = new Employee();

  constructor(private _http: Http) { }

  getEmployees() {
    return this._http.get('http://localhost:8080/api/employees/').pipe(
      map((response: Response) => response.json()));
  }

  postEmployees(employee) {
    return this._http.post('http://localhost:8080/api/employees/', employee).pipe(
      map((response: Response) => response.json()));
  }

  deleteEmployee(_id:string){
    return this._http.delete('http://localhost:8080/api/employees/'+_id).pipe(
      map(res=>res)
    )
  }

  editEmployee(employee){
    console.log(employee);

    return this._http.put('http://localhost:8080/api/employees/' + employee, JSON.stringify(this.employee), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  


  errorHandler(error: Response) {

    return Observable.throw(error || "SERVER ERROR");
  }

  setter(employee: Employee) {
    this.employee = employee;
  }

  getter() {
    return (this.employee);
  }


}
