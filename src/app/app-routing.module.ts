import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddTeachreComponent } from './components/add-teachre/add-teachre.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerComponent } from './components/banner/banner.component';
import { BestTutorsComponent } from './components/best-tutors/best-tutors.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { SigunpComponent } from './components/sigunp/sigunp.component';
import { SubscribtionComponent } from './components/subscribtion/subscribtion.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TestTeacherComponent } from './components/test-teacher/test-teacher.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: "search-section", component: SearchSectionComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "course", component: CourseComponent },
  { path: "courses", component: CoursesComponent },
  { path: "subscribtion", component: SubscribtionComponent },
  { path: "events", component: EventsComponent },
  { path: "best-tutors", component: BestTutorsComponent },
  { path: "news", component: NewsComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SigunpComponent },
  { path: "admin", component: AdminComponent },
  { path: "add-event", component: AddEventComponent },
  { path: "edit-event/:valeur", component: AddEventComponent },
  // important add
  { path: "add-course", component: AddCourseComponent },
  { path: "edit-course/:valeur", component: AddCourseComponent },
  { path: "add-teacher", component: AddTeachreComponent },
  { path: "edit-teacher/:valeur", component: AddTeachreComponent },
  { path: "teachers", component: TeachersComponent },
  { path: "footer", component: FooterComponent },
  { path: "teacherInfo/:valeur", component: TeacherInfoComponent },
  { path: "courseInfo/:valeur", component: CourseInfoComponent },
  { path: "eventeInfo/:valeur", component: EventInfoComponent },
  { path: "banner", component: BannerComponent },
  { path: "event", component: EventComponent },
  { path: "news", component: NewsComponent },
  { path: "test", component: TestTeacherComponent },
  { path: "serch", component: SearchComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
