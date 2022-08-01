import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  serchForm:FormGroup;
  constructor(private FormX:FormBuilder,private router:Router,private searchService: SearchService) { }

  ngOnInit() {
    this.serchForm = this.FormX.group({

      name: ['', [ Validators.required,]],
      

    })
  }

  serch(){
    console.log('name serch click', this.serchForm.value);

    this.searchService.serch(this.serchForm.value).subscribe(
      (data)=> {
        console.log('here data after serch BE', data.result);
        if (data.result =="0") {
          
          
        }else{
          this.router.navigate(['']);
        }

  }
    )
  }

}
