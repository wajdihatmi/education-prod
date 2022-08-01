import { Component, Input, OnInit } from '@angular/core';
import { allTutors } from 'src/app/Data/TutorsData';

@Component({
  selector: 'app-best-tutors',
  templateUrl: './best-tutors.component.html',
  styleUrls: ['./best-tutors.component.css']
})
export class BestTutorsComponent implements OnInit {
  tutors: any= [];
  qrcode:string;
  
  constructor() { }

  ngOnInit() {
    this.tutors= allTutors; 
  }
   
}
