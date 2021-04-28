import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from './log-update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogUpdateService]
})
export class AppComponent  implements OnInit {
  title = 'holify';
  logdata: any;
  subscription;

  constructor (private logUpdateService: LogUpdateService){
	  
	  document.addEventListener(
	    "visibilitychange",
		() => {
		  if (document.hidden){
             console.log("document is hidden");
		  }else{
                  document.location.reload();
				 
                  
		  }			  			  

		}
		);
  }
  
  
  ngOnInit(): void { 
     
      this.logUpdateData(); 
  }
   
  logUpdateData() {
       this.logUpdateService.getAvailableUpdate();
  }
  
  checkForUpdates(){
	  this.logUpdateService.checkForUpdates();
  }
  
    playVideo(){
     //alert(this.slides["video"]);
     var playIcon = document.getElementById("videoPlayIcon");
     playIcon.style.display = "none";
     var video = document.getElementById('videoplayer');
    
     var url = "https://raw.githubusercontent.com/gesab001/musicassets/master/tell-it-on-the-mountain.mp3";
     var source = document.createElement('source');   
     source.setAttribute('src', url);
     video.appendChild(source);
     video.style.display = "block";
     //video.play();

  }
}
