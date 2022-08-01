import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sigunp',
  templateUrl: './sigunp.component.html',
  styleUrls: ['./sigunp.component.css']
})
export class SigunpComponent implements OnInit {


  signupForm:FormGroup;
  msgError:string;
  constructor(private FormX:FormBuilder,private userService: UserService,private router:Router) { }

  ngOnInit() {
    this.signupForm = this.FormX.group({

      FirstName: ['', [ Validators.required, Validators.minLength(3)]],
      lastName: ['', [ Validators.required, Validators.minLength(4)]],
      email: ['', [ Validators.required, Validators.minLength(4)]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      cin: ['', [Validators.required, Validators.minLength(3)]],
      tel: ['', [Validators.required, Validators.minLength(3)]],

    })

  }

  Signup(){ 
    console.log('sinup click', this.signupForm.value);
    this.userService.Signup(this.signupForm.value).subscribe(
      (data)=> {
        console.log('here data after signup', data);
        if (data.message =="0") {
          this.msgError = "cin exists";
          
        }else{
          this.router.navigate(['']);
        }

  }
    )}
}
