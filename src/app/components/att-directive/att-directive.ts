import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {

  col1ClassName = signal<string>('');
  isCol2Green = signal<boolean>(false);

  setBgClass(className: string) {
    this.col1ClassName.set(className);
  }

  toggleCol2Color() {
    this.isCol2Green.update(value => !value);
  }

}
