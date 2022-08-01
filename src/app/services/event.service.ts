import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventeURl:string="http://localhost:3300/events";
  // eventeURl: string = "api/allEvents";
  constructor(private httpClient:HttpClient) { }

  AddEvents(obj){
    return this.httpClient.post<{ message: string }>(this.eventeURl, obj);



  }
  GetEvents(){
    //  request to get obj to match url from BE : bch tjib 
   return this.httpClient.get<{ a: any, message:any }>(this.eventeURl);

  }
  GetEventsById(valeur){
    return this.httpClient.get<{ findEvent: any }>(`${this.eventeURl}/${valeur}`);
     }
 DelteEventsById(valeur){
      return this.httpClient.delete<{ message: string }>(`${this.eventeURl}/${valeur}`);
 }

  EditEvents(obj){
        return this.httpClient.put<{ message: string }>(`${this.eventeURl}/${obj._id}`, obj);
    
  }
}
