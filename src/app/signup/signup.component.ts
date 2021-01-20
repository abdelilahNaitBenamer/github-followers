import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    username: new FormControl(
      '',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidator.cannotContainSpace
      ],
    ),
    password: new FormControl(
      '',[
        Validators.required,
        Validators.minLength(8),
        UsernameValidator.cannotContainSpace
      ]
    ),
  });

  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password')
  }

  ngOnInit(): void {
  }

}
