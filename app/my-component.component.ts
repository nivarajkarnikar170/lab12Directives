import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  inputs: ['myStrings'],
  template: `
    <p [appMyVisibility]="appMyVisibility"> text to hide </p>
    <ul>
    <li *ngFor="let item of myStrings" appUpper appMyColor (colorChange)="parentChangeColor($event)" >  {{item}}</li>
    </ul>
     <p> {{currentColor}}</p>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
  myStrings : any[];
  appMyVisibility: boolean;
  currentColor : string;
 // appMyColor : string[]; 
  constructor() { }

  ngOnInit() {
    this.appMyVisibility = true;  
    //this.appMyColor =  ["blue", "yellow", "orange"];
  }

  parentChangeColor(data: string){
    this.currentColor = data;
  }

}
