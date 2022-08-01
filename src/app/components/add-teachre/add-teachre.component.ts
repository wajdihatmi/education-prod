import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allTeacher } from 'src/app/Data/TeacherData';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teachre',
  templateUrl: './add-teachre.component.html',
  styleUrls: ['./add-teachre.component.css']
})
export class AddTeachreComponent implements OnInit {

  addTeachertId:any;
 AddTeacher:FormGroup;
 T:any ={};
 teacher = allTeacher;
 titleBtnT:string="addT"
 imagePreview:any
  constructor(private activtedTrouter:ActivatedRoute,
    private teachereServices:TeacherService,
    private router:Router,private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.AddTeacher = this.formBuilder.group({
      name: [''],
      age: [''],
      matiere: [''],
      img: [''],
    })
    this.addTeachertId = this.activtedTrouter.snapshot.paramMap.get('valeur')
    if (this.addTeachertId) {
     this.titleBtnT ='editT'
      // this.T = this.teacher.find(
      //   obj => {return obj.id == this.addTeachertId}
      // )
      // console.log('edit')
      this.teachereServices.GetTechersById(this.addTeachertId).subscribe(
        (data)=>{
          this.T= data.findTeacher
        }
      );
    }


  }
  AddOrEditTeacher(){
  
    console.log('here my obj',this.T)
    if (this.addTeachertId) {
      this.teachereServices.EditTechers(this.T).subscribe(
        (data)=>{
          console.log('here data after edit',data.message)
          this.router.navigate(['admin'])
        }
      );
      
    } else {
      this.teachereServices.AddTechers(this.T, this.AddTeacher.value.img).subscribe(
        (data)=>{
          console.log('here data after Add',data.message)
          this.router.navigate(['admin'])
        }
      );
      
    }

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.AddTeacher.patchValue({ img: file });
    this.AddTeacher.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
