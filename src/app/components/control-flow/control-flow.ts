import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisible :boolean= true;

  showPara(){
    this.isParaVisible = !this.isParaVisible;
  }

  hidePara(){
    this.isParaVisible = !this.isParaVisible;
  }

}
