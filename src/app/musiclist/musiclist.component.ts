import { Component, OnInit } from '@angular/core';
import songlist from '../../assets/audio/songlist.json';
import { Location } from '@angular/common';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  songs = songlist;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
	alert("go back");  
    this.location.back();
  }
}
