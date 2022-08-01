import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userURl: string="http://localhost:3300/users";
  constructor(private httpClient: HttpClient) { }

  Signup(user){
    return this.httpClient.post<{message: string, user: any}>(`${this.userURl}/signup`, user);
 }
 login(user){
  return this.httpClient.post<{message: string, user: any}>(`${this.userURl}/login`, user);
}
}
