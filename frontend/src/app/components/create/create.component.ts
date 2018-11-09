import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      Name: ['', Validators.required],
      Age: '',
      Position: '',
      Skill: '',
      Team: ''
    });
  }

  addEmployee(Name, Age, Position, Skill, Team) {
    this.employeeService.addEmployee(Name, Age, Position, Skill, Team).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
