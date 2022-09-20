import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from './user.modual';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

@ViewChild('loginForm') login?:NgForm;

user:user

  constructor() { 
    this.user = new user
  }

  ngOnInit(): void {
  }
  getform(data:any){

    console.log(this.login);
    console .log(data)
  }
}
