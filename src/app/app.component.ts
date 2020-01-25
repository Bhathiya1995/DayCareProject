import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event){
    console.log("scroll event", window.pageYOffset)
    if(window.pageYOffset >10){
      
    }
  }
}


