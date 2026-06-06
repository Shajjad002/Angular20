import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle,UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  col1ClassName = signal<string>('');
  isCol2Green = signal<boolean>(false);

  firstName:string = 'Shariful';
  courseName:string = 'Angular 20 tutorial';

  rollNoList:number[] = [1,2,3,4,5];

  studentOdject = {
    name: 'Shariful',
    age: 30,
    course: 'Angular',
    city: 'Dhaka',
    country: 'Bangladesh'
  }

currentDate:Date = new Date();

  constructor() {
   console.log('constructor will be called first when the component is created');
  }

  ngOnInit(): void {
    console.log('ngOnInit will be called after this constructor');
    //to trigger api call or to initialize data for the component
    //to subscribe to observables or to set up event listeners
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit will be called after ngOnInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked will be called after ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit will be called after ngAfterContentChecked');
    //to deal with viewchild
    //subscribe to observables
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked will be called after ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy will be called when the component is destroyed');

    //unsubscribe from observables
    //clean up resources
    //restrict use from navigating away from the component without saving changes
  }
  
  setBgClass(className: string) {
    this.col1ClassName.set(className);
  }

  toggleCol2Color() {
    this.isCol2Green.update(value => !value);
  }

}
