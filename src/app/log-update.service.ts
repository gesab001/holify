import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})

export class LogUpdateService {
  _data: any = null;
  updates: SwUpdate;   
  constructor(updates: SwUpdate) {
       this.updates = updates;
  
  }

  clearCache() {
    this._data = null;
  }
  
  getAvailableUpdate(){ 
      this.clearCache();
	  console.log("log update service get available update");
	  alert("log update service get available update");
	  this.updates.available.subscribe(event => {
        console.log('current version is', event.current);
		alert('current version is'+ event.current);
		alert('available version is' + event.available);
        console.log('available version is', event.available);
    });

  }
  
  getActivatedUpdate(){
	  this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}