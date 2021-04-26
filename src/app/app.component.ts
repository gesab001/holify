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
  constructor (private logUpdateService: LogUpdateService){}
  
  
  ngOnInit(): void { 
     
      this.logUpdateData(); 
  }
  
  logUpdateData() {
	 
       this.logUpdateService.getAvailableUpdate();
  }
}