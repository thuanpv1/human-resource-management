import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[];
  displayedColumns = ['Name', 'Age', 'Position', 'Skill', 'Team', 'Actions'];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
        console.log('Data requested ...');
        console.log(this.employees);
      });
  }

  editEmployee(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.fetchEmployees();
    });
  }

}
