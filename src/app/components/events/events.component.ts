import { Component, OnInit } from '@angular/core';
import { allEvents } from 'src/app/Data/EventsData';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any = [];
  constructor() { }

  ngOnInit() {
   this.events = allEvents;
  }

}
