import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Input: any={id:1, name: "koora", age: 30, matiere: "info", nationality:"deutch" }
  
  constructor() { }

  ngOnInit() {
    
    
  }

}
