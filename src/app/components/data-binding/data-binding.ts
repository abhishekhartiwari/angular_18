import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  //string, number, boolean, date

  courseName: string = 'Angular 18';
  inputType = "checkbox";
  stateName: string = '';
  rollNo: number = 101;
  isIndian: boolean = true;
  dateOfBirth: Date = new Date(1990, 1, 1);
  myClassName: string = 'bg-primary';

  firstName = signal("Abhishek Tiwari");

  constructor() {

  }

  showAlert(message: string) {
    alert(message);
  }

  changeCourseName() {
    this.courseName = 'Java Course';
  }


}
