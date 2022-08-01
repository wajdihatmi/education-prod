import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  serchURl:string="http://localhost:3300/serch";
  constructor(private httpClient: HttpClient) { }

  serch(obj){
    return this.httpClient.post<{ result: any }>(this.serchURl, obj);



  }
}
