import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  title = "La liste de mes cours";
  imgUrl = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
  email:string = "me@gmail.com";
  star = {
    title:"courses title",
    isEmpty: true
  }
  onKeyUp(){
    console.log(this.email)
  }

  body="The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell."

  onClick(){

  }

  onChangeStar(isEmpty:boolean){
    console.log('Output property: '+isEmpty)
  }

  ngOnInit(): void {
  }

}
