import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let allCourses = [
      {id:1, name: "erwa", prix: 50, description: 14 , place: 8},
      {id:2, name: "taytayo", prix: 150, description: 17 , place: 44},
      {id:3, name: "sasoko", prix: 500, description: 55 , place: 77},
  
  
       ];
       let allEvents = [
        {id:1, name: "erwa",  description: "fort" , date: 7, place: 7, prix: 4774 },
        {id:2, name: "diiida",  description: "faible" , date: 8, place: 7, prix: 1144 },
        {id:3, name: "hach",  description: "moyen" , date: 11, place: 7, prix: 54 },
        {id:4, name: "balti",  description: "sup" , date: 21, place: 1, prix: 5 },
       
    
    
    ];
    let allTeacher = [
      {id:1, name: "erwa", age: 50, matiere: "info" },
      {id:2, name: "khaled", age: 70, matiere: "physique" },
      {id:3, name: "adel", age: 55, matiere: "matematique" },
      
  
  ];

   return {allCourses,allEvents,allTeacher};

  }
  
  

}
