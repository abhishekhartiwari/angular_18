import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  // template: '<h1 class="primary">Hello from employee list</h1>',
  template: `<h1 class="global-style">Hello from employee list</h1>`,
  styles: ['.primary{color:red}']
})
export class EmployeeList {

}
