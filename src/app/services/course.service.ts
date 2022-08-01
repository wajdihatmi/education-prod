import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseURl:string="http://localhost:3300/courses";
  // courseURl : string = "api/allCourses";

  constructor( private httpClient:HttpClient) { }
  AddCourses(obj){
    return this.httpClient.post<{ message: string }>(this.courseURl, obj);



  }
  GetCourses(){
    //  request to get obj to match url from BE : bch tjib 
   return this.httpClient.get<{ a: any }>(this.courseURl);

  }
  GetCoursesById(valeur){
    return this.httpClient.get<{ findCourse: any }>(`${this.courseURl}/${valeur}`);
  }
  DelteCoursesById(valeur){
    return this.httpClient.delete<{ message: string }>(`${this.courseURl}/${valeur}`);
     }
  EditCourses(obj){
      return this.httpClient.put<{ message: string }>(`${this.courseURl}/${obj._id}`, obj);
    }
  
}
