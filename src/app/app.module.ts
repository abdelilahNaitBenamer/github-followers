import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from 'src/services/courses.service';
import { EmailService } from 'src/services/email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumePipe } from './../pipes/resume.pipe';
import { ExerciceComponent } from './exercice/exercice.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './../directives/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/services/posts.service';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from 'src/services/followers.service';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfilFollowerComponent } from './profil-follower/profil-follower.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    ExerciceComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupComponent,
    PostsComponent,
    FollowersComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    ProfilFollowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CoursesService,EmailService,PostsService, FollowersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
