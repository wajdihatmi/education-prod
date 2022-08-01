import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allEvents } from 'src/app/Data/EventsData';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  tit:string = 'eventInfo';
  eventeId: any;
  events = allEvents;
  findedEvente: any;
  
  constructor( private activtedEventeRoute:ActivatedRoute,
    private eventeServices:EventService) { }

  ngOnInit() {
    this.eventeId = this.activtedEventeRoute.snapshot.paramMap.get('valeur')
    // this.findedEvente = this.events.find(
    //   (obj) => {return obj.id == this.eventeId}
    // );
    this.eventeServices.GetEventsById(this.eventeId).subscribe(
      (data)=>{
     
      console.log('Hyy data,',data.findEvent)
     this.findedEvente = data.findEvent;
      }
    );
  }

}
