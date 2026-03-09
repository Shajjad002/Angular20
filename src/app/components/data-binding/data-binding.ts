import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
  
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  protectedPrice: number = 12500;
  isAvailable: boolean = true;
  maxLength: number = 5;
  minCharacters: number = 3;
  inputType: string = 'radio';

  myClassName: string = 'myColor';

  constructor() {
    setTimeout(() => {
      this.courseName = 'Updated Angular 20 Tutorial';
    }, 3000);
  }
  showAlert() {
    alert('Welcome to Angular 20 Tutorial');
  }

}
