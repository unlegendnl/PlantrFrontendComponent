import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from '../models/usermodel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }
  token: any;

  login(userModel: Usermodel) {
    console.log('Attempting to connect.');
    this.token = this.http.post(environment.link + 'api/login', userModel, {observe: 'response'});
    console.log(this.token);
    return this.token;
  }


  register(userModel: Usermodel) {
    console.log('Attempting to connect.');
    return this.http.post(environment.link + 'api/User', userModel);
  }
}