import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachereURl:string="http://localhost:3300/teachers";
  // teachereURl: string = "api/allTeacher";
  constructor(private httpClient:HttpClient) { }
  addPlayer(obj, img:File) {
    console.log('service obj', obj);
    // formedata
    let formedata = new FormData();
    formedata.append('w', obj.name);
    formedata.append('a', obj.age);
    formedata.append('j', obj.matiere);
   
    formedata.append('image', img);
    

    return this.httpClient.post<{ message: string }>(this.teachereURl, formedata);



  }
  AddTechers(obj, img:File){
    return this.httpClient.post<{ message: string }>(this.teachereURl, obj);



  }
  GetTechers(){
    //  request to get obj to match url from BE : bch tjib 
   return this.httpClient.get<{ a: any, message:any }>(this.teachereURl);

  }

  GetTechersById(valeur){
    return this.httpClient.get<{ findTeacher: any }>(`${this.teachereURl}/${valeur}`);
  
     }
 DelteTechersById(valeur){
      return this.httpClient.delete<{ message: string }>(`${this.teachereURl}/${valeur}`);
 }
 EditTechers(obj){
        return this.httpClient.put<{ message: string }>(`${this.teachereURl}/${obj._id}`, obj);
  }
  
}

