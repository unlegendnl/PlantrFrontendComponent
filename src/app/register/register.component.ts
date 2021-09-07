import { Component, OnInit } from '@angular/core';
import {Usermodel} from '../models/usermodel'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new Usermodel();

  onSubmit() { console.log(this.model) }

  constructor() { }

  ngOnInit(): void {
  }

}
