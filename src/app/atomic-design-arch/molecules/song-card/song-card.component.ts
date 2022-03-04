import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/track-model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() song!:any;
  constructor() { }

  ngOnInit(): void {

    console.log(this.song.name);
    
  }

}
