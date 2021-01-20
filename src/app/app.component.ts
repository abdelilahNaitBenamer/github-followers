import { Component } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-idbrahim-formation';
  viewCourse = '.Net Core'

  courses:any;

  addCourse(){
    this.courses.push({id:4, name:'ReactJS'})
  }

  removeCourse(course:any){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1);
  }

  editCourse(item:any){
    item.name =  item.name+" updated";
  }

  loadCourse(){
    this.courses=[
      {id:1, name:'DotNet Core'},
      {id:2, name:'Spring Boot'},
      {id:3, name:'Laravel'},
    ]
  }

  trackCourse(index:number, course:any){
    return course ?  course.id : undefined;
  }
}
