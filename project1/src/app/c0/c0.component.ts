import { Component } from '@angular/core';

@Component({
  selector: 'app-c0',
  templateUrl: './c0.component.html',
  styleUrls: ['./c0.component.css']
})
export class C0Component {
  title = 'project1';
  code:String ="GJ 05 RV ";
  n1:number =4893;
  RDate:Date=new Date(Date.now())
  numberPlate=[]=["GJ 05 JS 7485","GJ 05 RV 4893"];
  TextNP=[]=["Text Box","Text Area"];
  selection:String="Text Box";
  selectedNP:String="GJ 05 JS 7485";
  OnChange(){
    
  }
}
