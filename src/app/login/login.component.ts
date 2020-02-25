import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'

import {LoginService} from '../login.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  model = {
    email : "",
    password: ""
  };

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.loginService.login(form.value)
    .subscribe(
      res=>{
        console.log();
        this.loginService.setToken(res["data"]["token"]);
        if (res["data"]["user"]["type"] == "parent"){
          this.router.navigateByUrl('/parentProfile');
        }else if(res["data"]["user"]["type"] == "admin"){
          this.router.navigateByUrl('/adminProfile');
        }
        
      },
      err=>{
        console.log(err);   
      }
    );
  }

}
