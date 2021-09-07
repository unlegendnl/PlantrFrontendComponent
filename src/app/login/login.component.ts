import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {Usermodel} from '../models/usermodel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Usermodel();

  onSubmit() { console.log(this.model) }


  constructor() { }

  ngOnInit(): void {
  }

}
