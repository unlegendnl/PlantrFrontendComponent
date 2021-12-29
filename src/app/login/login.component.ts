import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtTokenModel } from '../models/JwtTokenModel';
import {Usermodel} from '../models/usermodel'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    _username: new FormControl('', [Validators.required]),
    _password: new FormControl('', [Validators.required]),
  });

  _currentUser = new Usermodel();
  _currentUserFromJWT = new Usermodel();


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.test();
  }

  onSubmit() {
    console.log("attempting login with credentials " + this._currentUser.userName);
    this._currentUser.email = "string";

    this.authService.login(this._currentUser).subscribe((result: JwtTokenModel) => {
      console.log(result);

      const helper = new JwtHelperService();
      var tokenString = JSON.stringify(result)
      localStorage.setItem('Token', JSON.stringify(result));
      var decoded = helper.decodeToken(tokenString);
      console.log(decoded);

      //this._currentUserFromJWT.userName = decoded.userName;

      //localStorage.setItem('user', JSON.stringify(this._currentUserFromJWT));

      this.router.navigate(['dashboard']);
    }, (error: any) => {
      console.log(error);
    });


  }

}


