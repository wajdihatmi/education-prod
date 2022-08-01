import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allEvents } from 'src/app/Data/EventsData';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addEventId:any;
 AddEvent:FormGroup;
 E:any ={};
 events = allEvents;
 titleBtnE:string ="addE"
  constructor(private activtedErouter:ActivatedRoute,
    private eventeServices:EventService,
    private router:Router) { }

  ngOnInit() {
    this.addEventId = this.activtedErouter.snapshot.paramMap.get('valeur')
    if (this.addEventId) {
      this.titleBtnE ='editE'
      // this.E = this.events.find(
      //   obj => {return obj.id == this.addEventId}
      // )
      // console.log('edit')
      
      this.eventeServices.GetEventsById(this.addEventId).subscribe(
        (data)=>{
          this.E= data.findEvent
        }
      );
    } 
    
  }
  AddOrEditEvent(){
    console.log('here my obj',this.E)
    if (this.addEventId) {
      this.eventeServices.EditEvents(this.E).subscribe(
        (data)=>{
          console.log('here data after Add',data.message)
          this.router.navigate(['admin'])
        }
      );
      
    } else {
      this.eventeServices.AddEvents(this.E).subscribe(
        (data)=>{
          console.log('here data after Add',data.message)
          this.router.navigate(['admin'])
        }
      );
      
    }
  }

}
