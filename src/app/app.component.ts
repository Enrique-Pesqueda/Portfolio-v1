import { Component, HostListener, Host, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  visa = true;
  hc = false;
  csumb = false;
  lastScroll = 0;
  
  visaHeader = "Engineering Intern <span class ='jobHdPnl'>@ Visa</span>";
  hcHeader = "C.S. Tutor <span class ='jobHdPnl'>@ Cal State, Monterey Bay</span>";
  
  visaDate = "May 2019 - Aug 2019";
  hcDate = "Aug 2018 - Dec 2018";

  visaList = "<ul><li>Developed and deployed a comprehensive solution to enforce government-imposed mandates and conducted extensive functional regression testing while using an IBM z/TPF mainframe operating system.</li><li>Enhanced several developer tools used across several teams in order to expedite processes needed by the VIP Online Support Team.</li><li>Formulated design documents, unit tests, and deprecated other outdated features to enhance code quality, and reduce test, and production incidents. </li></ul>";
  hcList = "<ul><li>Improved student’s performance on standardized tests by ~10% by facilitating meetings geared to improve student's computer programming, critical thinking, problem-solving, and teamwork skills through weekly co-created coursework.</li></ul>";
  


  
  ngOnInit(){
    let vBttn = document.querySelector("#visa");
    if(this.visa == true){
      vBttn.setAttribute("style", " background-color:#edae490d; color: #EDAE49; border-left: 2px solid #EDAE49;");
    }
  }

  @HostListener("document:scroll")
  scrollToDisapear(){
    const body = document.body;
    const triggerMenu = document.querySelector(".page-header .trigger-menu");
    const nav = document.querySelector(".page-header nav");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    
    window.addEventListener("scroll", () =>{
      let currentScroll:number = window.pageYOffset;
      currentScroll = Math.floor(currentScroll);
      if (currentScroll == 0) {
        body.classList.remove(scrollUp);
      }
      if (currentScroll > this.lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } 
      else if (currentScroll < this.lastScroll && body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      this.lastScroll = currentScroll;
    });
  }

  
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

  
  showFaces(face){
    let vBttn = document.querySelector("#visa");
    let hcBttn = document.querySelector("#hc");

    let panelHeader = document.querySelector(".panel-header");
    let panelDate = document.querySelector(".pnlhdrdte");
    let panelList = document.querySelector(".pnllst");

    if(face == 'hc'){
      vBttn.setAttribute("style", "background-color: #181D4E; color: rgb(168, 178, 209);");
      hcBttn.setAttribute("style", " background-color:#edae490d; color: #EDAE49; border-left: 2px solid #EDAE49;");

      panelHeader.innerHTML = this.hcHeader;
      panelDate.innerHTML = this.hcDate;
      panelList.innerHTML = this.hcList;
    }
    else if(face == 'visa'){
      vBttn.setAttribute("style", " background-color:#edae490d; color: #EDAE49; border-left: 2px solid #EDAE49;");
      hcBttn.setAttribute("style", "background-color: #181D4E; color: rgb(168, 178, 209);");

      panelHeader.innerHTML = this.visaHeader;
      panelDate.innerHTML = this.visaDate;
      panelList.innerHTML = this.visaList;
    }
    
   
  }
 
}
