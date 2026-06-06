import { NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  col1ClassName = signal<string>('');
  isCol2Green = signal<boolean>(false);

  constructor() {
   console.log('constructor will be called first when the component is created');
  }

  ngOnInit(): void {
    console.log('ngOnInit will be called after this constructor');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit will be called after ngOnInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked will be called after ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit will be called after ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked will be called after ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy will be called when the component is destroyed');
  }
  
  setBgClass(className: string) {
    this.col1ClassName.set(className);
  }

  toggleCol2Color() {
    this.isCol2Green.update(value => !value);
  }

}
