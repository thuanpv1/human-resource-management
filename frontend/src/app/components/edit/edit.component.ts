import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  employee: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      Name: ['', Validators.required],
      Age: '',
      Position: '',
      Skill: '',
      Team: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.employeeService.getEmployeeById(this.id).subscribe(res => {
        this.employee = res;
        this.updateForm.get('Name').setValue(this.employee.Name);
        this.updateForm.get('Age').setValue(this.employee.Age);
        this.updateForm.get('Position').setValue(this.employee.Position);
        this.updateForm.get('Skill').setValue(this.employee.Skill);
        this.updateForm.get('Team').setValue(this.employee.Team);
      });
    });
  }

  updateEmployee(Name, Age, Position, Skill, Team) {
    this.employeeService.updateEmployee(this.id, Name, Age, Position, Skill, Team).subscribe(() => {
      this.snackBar.open('Employee updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
