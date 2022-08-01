import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allCourses } from 'src/app/Data/CoursesData';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {
  title:string;
  courses: any=[];
  pageOfItems: Array<any>;
  constructor(private courserouter:Router,
    private courseServices:CourseService) { } 

  ngOnInit() {
    // this.courses = allCourses
    // this.OnCourses();
    this.courseServices.GetCourses().subscribe((data)=>{
      this.courses=data.a
    })
  }

  display(pd){
    this.courserouter.navigate([`courseInfo/${pd}`]);
    
  }
  edit(pd){
    this.courserouter.navigate([`edit-course/${pd}`]);
    
  }
  delte(pd){
    this.courseServices.DelteCoursesById(pd).subscribe(
      (data)=>{
        console.log('here after delte',data.message)
        this.OnCourses();
      }
    );
    
  }
  OnCourses(){
  this.courseServices.GetCourses().subscribe(
    (data)=>{
      this.courses= data.a;
    }
  )
}
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}
}
