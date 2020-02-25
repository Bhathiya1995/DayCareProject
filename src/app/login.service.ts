import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(authCredintials){
  
    return this.http.post(environment.apiBaseUrl + "/login", authCredintials)
  }

  setToken(token: string){
    localStorage.setItem('token', token); 
  }

  deleteToken(){
    localStorage.removeItem("token");
  }

  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var userpayload = atob(token.split('.')[1]);
      return JSON.parse(userpayload);
    }else{
      return null;
    }
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload){
      return userPayload.exp > Date.now()/1000;
    }else{
      return false;
    }
  }

}

