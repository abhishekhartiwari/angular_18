import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {

  isColumn1Visible: boolean = false;
  isColumn2Visible: boolean = false;
  num1:string = '';
  num2:string = '';
  isActive: boolean = false;
  selectedState: string = '';

  CityArray: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'];

  showColumn1() {
    this.isColumn1Visible = true;
  }

  hideColumn1() {
    this.isColumn1Visible = false;
  }

  toggleColumn2() {
    this.isColumn2Visible = !this.isColumn2Visible;
  }
}
