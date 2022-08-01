import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  Datepipe: Date;
  constructor() { }

  ngOnInit() {

    this.Datepipe = new Date();
  }

}
