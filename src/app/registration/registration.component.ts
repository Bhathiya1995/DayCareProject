import { Component, OnInit } from '@angular/core';


import { ParentService } from '../parent.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ParentService]
})
export class RegistrationComponent implements OnInit {

  showSuccessMessage: boolean;
  serverErrorMessages: string;
  

  constructor(private parentService: ParentService) { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;

    this.parentService.postParent(form.value).subscribe(
      res => {
        console.log("Success")
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        this.serverErrorMessages = err;
      }
    );
  }

  resetForm(form: NgForm) {
    this.parentService.selectedParent = {
      parentName: '',
      nic: '',
      address: '',
      email: '',
      password: '',
      status: 0,
    };
    form.resetForm();
    this.serverErrorMessages = "";  
  }

}
