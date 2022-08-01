import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allTeacher } from 'src/app/Data/TeacherData';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  tit:string='teacherInfo'
  teacherId: any;
  teacher = allTeacher;
  findedTeacher: any;
  constructor( private activtedTeacherRoute:ActivatedRoute,
    private teachereServices:TeacherService) { }

  ngOnInit() {
    this.teacherId= this.activtedTeacherRoute.snapshot.paramMap.get('valeur')
    // this.findedTeacher = this.teacher.find(
    //   (obj) => {return obj.id == this.teacherId}
    // );
    this.teachereServices.GetTechersById(this.teacherId).subscribe(
      (data)=>{
      console.log('Hyy data',data.findTeacher)
      this.findedTeacher = data.findTeacher;
      }
    );
  }


}
