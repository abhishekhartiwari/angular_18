import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from "./components/add-employee/add-employee";
import { EmployeeList } from "./components/employee-list/employee-list";
import { DataBinding } from "./components/data-binding/data-binding";
import { Directive } from "./components/directive/directive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployee, EmployeeList, DataBinding, Directive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular_18';
}
