import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allTeacher } from 'src/app/Data/TeacherData';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {


  teacher: any = [];
  pathTableau:string;
  isAction:boolean= false;
  title:string;
  constructor(private teacherouter:Router,
    private teachereServices:TeacherService) { }

  ngOnInit() {
    // affichage boton en teachertable mais testteacher non
    this.pathTableau = this.teacherouter.url;
    if (this.pathTableau== "/admin") {
      this.isAction = true;
    } 
    this.teacher = allTeacher;
    this.OnTeachrs();
  }

  display(pd){
    this.teacherouter.navigate([`teacherInfo/${pd}`]);
    
  }
  edit(pd){
    this.teacherouter.navigate([`edit-teacher/${pd}`]);
    
  }
  delte(pd){
    this.teachereServices.DelteTechersById(pd).subscribe(
      (data)=>{
        console.log('here after delte',data.message)
        this.OnTeachrs();
      }
    );
    
  }
OnTeachrs(){
 this.teachereServices.GetTechers().subscribe(
    (data)=>{
      this.teacher= data.a;
    }
  )
}

}
