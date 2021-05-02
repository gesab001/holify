import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
      `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
      `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  karaoke_url: SafeResourceUrl;
  instrumental_url: SafeResourceUrl;
  vocal_url: SafeResourceUrl;
  music_video_url: SafeResourceUrl;

 constructor(private router: Router, private route: ActivatedRoute, private location: Location, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
 //   iconRegistry.addSvgIconLiteral('karaoke', sanitizer.bypassSecurityTrustHtml(KARAOKE_I));
    iconRegistry.addSvgIcon(
      "karaoke",
       sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/karaoke.svg")
    );
   iconRegistry.addSvgIcon(
      "mp3",
       sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/mp3.svg")
    );	
   iconRegistry.addSvgIcon(
      "music",
       sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/music.svg")
    );		
  }
  
  ngOnInit(): void {
	    this.route.paramMap.subscribe(params => { 
        this.karaoke_url = this.getSafeSrc(params.get('karaoke'));
        this.instrumental_url = this.getSafeSrc(params.get('instrumental'));
        this.vocal_url = this.getSafeSrc(params.get('vocal'));
        this.music_video_url = this.getSafeSrc(params.get('musicVideo'));

     });
  }
  public getSafeSrc(filename: string): SafeResourceUrl {
     var stringurl = "https://raw.githubusercontent.com/gesab001/musicassets/master/"+ filename;
     var safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(stringurl);
     return safeSrc;
  }
  
  back(): void {
	//alert("go back");  
    this.location.back();
  }
}
