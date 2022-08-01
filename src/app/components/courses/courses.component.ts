import { Component, Input, OnInit } from '@angular/core';
import { allCourses } from 'src/app/Data/CoursesData';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any = [];
  
  
  constructor() { }

  ngOnInit() {
    this.courses = allCourses;
  }

}
