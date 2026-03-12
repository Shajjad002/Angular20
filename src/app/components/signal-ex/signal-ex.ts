import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  firstName: string = 'John';
  productName = 'Laptop';
  courseName = signal<string>('Angular');

  courseDuration = signal('5 months');
  // courseDetails = signal({
  //   name: 'Angular',
  //   duration: this.courseDuration(),
  // });

  courseDetails = computed(() =>
    this.courseName() + ' - ' + this.courseDuration(),
  );

  constructor() {
    this.firstName = 'Jane';
    console.log(this.firstName); // Output: Jane

    setTimeout(() => {
      this.courseName.set('React');
    }, 5000);

    //this.courseName.set('React');
    console.log(this.courseName()); // Output: React
  }
}
