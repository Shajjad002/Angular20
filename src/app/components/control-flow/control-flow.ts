import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisible :boolean= true;
  startMonthName : string = "February";
  cityList : string[] = ["Dhaka", "Chattogram", "Coxs Bazar", "Rajshahi", "Sylhet"];


  showPara(){
    this.isParaVisible = !this.isParaVisible;
  }

  hidePara(){
    this.isParaVisible = !this.isParaVisible;
  }

}
