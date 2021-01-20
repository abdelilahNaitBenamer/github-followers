import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(lastName:any){
    console.log(lastName)
  }

  submit(f:any){
    console.log(f.value.firstName);
  }
  options=[
    {id:1,label:'Email'},
    {id:2,label:'Phone'},
    {id:3,label:'Sms'}
  ]
}
