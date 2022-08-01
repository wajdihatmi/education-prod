import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allCourses } from 'src/app/Data/CoursesData';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  title:string = "courseInfo";
  courseId: any;
  courses = allCourses;
  findedCourse: any;
  constructor(private activtedCourseRoute:ActivatedRoute,
    private courseServices:CourseService) { }

  ngOnInit() {
    this.courseId = this.activtedCourseRoute.snapshot.paramMap.get('valeur')
    // this.findedCourse = this.courses.find(
    //   (obj) => {return obj.id == this.courseId}
    // );
    this.courseServices.GetCoursesById(this.courseId).subscribe(
      (data)=>{
     console.log('Hyy data,',data.findCourse)
     this.findedCourse = data.findCourse;
      }
    )
  }

}
