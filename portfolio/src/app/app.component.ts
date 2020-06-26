import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  

  toAbout(){
    document.getElementById("about-me").scrollIntoView({behavior:"smooth"});
  }
  toExperience(){
    document.getElementById("jobs").scrollIntoView({behavior:"smooth"});
  }
  toProjects(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("get-in-contact").scrollIntoView({behavior:"smooth"});
  }

}
