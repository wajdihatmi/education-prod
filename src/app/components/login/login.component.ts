import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// object input
  user: any= {};
  // id ngForm
  loginForm: FormGroup;
  
  
  constructor(private FormX:FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.FormX.group({
      email: [''],
      pwd: [''],
      cin: [''],


    })
  }


  login(){
    console.log('heyy user', this.user);
    this.userService.login(this.user).subscribe(
      (data) =>{
        console.log('here data after login', data);

        if (data.message !="2") {
          
        } else {
          
        }
    }
    )
    
  }

}
