import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {

  row1ClassName=signal<string>('');

  setBgClass(className: string) {
    this.row1ClassName.set(className);
  }

}
