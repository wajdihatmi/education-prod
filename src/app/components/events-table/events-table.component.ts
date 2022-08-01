import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allEvents } from 'src/app/Data/EventsData';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {
  
  events:any = [];
  title:string;
  constructor(private eventerouter:Router,
    private eventeServices:EventService) { }

  ngOnInit() {
    // this.events = allEvents;
    this.OnEvents();
  }

  display(pd){
    this.eventerouter.navigate([`eventeInfo/${pd}`]);
    
  }
  edit(pd){
    this.eventerouter.navigate([`edit-event/${pd}`]);
    
  }
  delte(pd){
    this.eventeServices.DelteEventsById(pd).subscribe(
      (data)=>{
        console.log('here after delte',data.message)
        this.OnEvents();
      }
    );
    
  }
  OnEvents(){
   this.eventeServices.GetEvents().subscribe(
      (data)=>{
        this.events=data.a;
      }
   )
  }
  
}

