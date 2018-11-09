import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.uri}/employees`);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.uri}/employees/${id}`);
  }

  addEmployee(Name, Age, Position, Skill, Team) {
    const employee = {
      Name: Name,
      Age: Age,
      Position: Position,
      Skill: Skill,
      Team: Team
    };
    return this.http.post(`${this.uri}/employees/add`, employee);
  }

  updateEmployee(id, Name, Age, Position, Skill, Team) {
    const employee = {
      Name: Name,
      Age: Age,
      Position: Position,
      Skill: Skill,
      Team: Team
    };
    return this.http.post(`${this.uri}/employees/update/${id}`, employee);
  }

  deleteEmployee(id) {
    return this.http.get(`${this.uri}/employees/delete/${id}`);
  }
}
