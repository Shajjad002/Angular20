import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  firstNaeme: string = 'John';
  productName= 'Laptop';
  courseName = signal<string>('Angular');

  courseDuration = signal('3 months');

  constructor() {   
    this.firstNaeme = 'Jane';
    console.log(this.firstNaeme); // Output: Jane

    this.courseName.set('React');
    console.log(this.courseName()); // Output: React
  }
}
