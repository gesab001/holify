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
          
			      
		  }			  
		}
		);
  }
  
  
  ngOnInit(): void { 
     
      this.logUpdateData(); 
  }
  
  logUpdateData() {
	    alert("document is showing");
       this.logUpdateService.getAvailableUpdate();
  }
}
