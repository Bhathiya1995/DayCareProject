import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

import {Parent} from './parent.model'


@Injectable({
  providedIn: 'root'
})
export class ParentService {
  selectedParent: Parent = {
    parentName: '',
    nic: '',
    address: '',
    email: '',
    password: '',
    status: 0,
  }

  constructor(private http: HttpClient) { }

  postParent(parent: Parent){
    console.log(parent);
    return this.http.post(environment.apiBaseUrl+ '/register', parent);

  }
}
