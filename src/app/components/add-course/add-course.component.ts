import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allCourses } from 'src/app/Data/CoursesData';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
 addCourseId:any;
 AddCourse:FormGroup;
 C : any = {};
 courses = allCourses;
 titleBtnC:string ="addC"
 
  constructor(private activtedCrouter:ActivatedRoute,
    private courseServices:CourseService,
    private router:Router) { }

  ngOnInit() {
    this.addCourseId = this.activtedCrouter.snapshot.paramMap.get('valeur')
    if (this.addCourseId) {
      this.titleBtnC ='editC'
         this.courseServices.GetCoursesById(this.addCourseId).subscribe(
        (data)=>{
          this.C= data.findCourse
        }
      );
    } 
  }
  AddOrEditCourse(){
    console.log('here my obj',this.C)
    if (this.addCourseId) {
      this.courseServices.EditCourses(this.C).subscribe(
        (data)=>{
          console.log('here data after Edit',data.message)
          this.router.navigate(['admin'])
        }
      );
          } else {
      this.courseServices.AddCourses(this.C).subscribe(
        (data)=>{
          console.log('here data after Add',data.message)
          this.router.navigate(['admin'])
        }
      );
          }
  }
}
