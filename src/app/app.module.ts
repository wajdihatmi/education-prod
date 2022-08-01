import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SubscribtionComponent } from './components/subscribtion/subscribtion.component';
import { EventsComponent } from './components/events/events.component';
import { BestTutorsComponent } from './components/best-tutors/best-tutors.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseComponent } from './components/course/course.component';
import { EventComponent } from './components/event/event.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { LoginComponent } from './components/login/login.component';
import { SigunpComponent } from './components/sigunp/sigunp.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddTeachreComponent } from './components/add-teachre/add-teachre.component';
import { TestTeacherComponent } from './components/test-teacher/test-teacher.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SearchComponent } from './search/search.component';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    WelcomeComponent,
    CoursesComponent,
    SubscribtionComponent,
    EventsComponent,
    BestTutorsComponent,
    NewsComponent,
    FooterComponent,
    CourseComponent,
    EventComponent,
    TutorComponent,
    LoginComponent,
    SigunpComponent,
    AdminComponent,
    HomeComponent,
    AddCourseComponent,
    AddEventComponent,
    TeachersComponent,
    CoursesTableComponent,
    TeacherTableComponent,
    EventsTableComponent,
    TeacherInfoComponent,
    CourseInfoComponent,
    EventInfoComponent,
    BannerComponent,
    AddTeachreComponent,
    TestTeacherComponent,
    CustomFilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    QRCodeModule
    // InMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
