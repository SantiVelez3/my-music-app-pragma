import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';
import { TracksService } from 'src/app/core/services/tracks.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  songsList:any;
  constructor(private tracksService:TracksService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.tracksService.getSongs().subscribe(data =>{
      console.log(data.items);
      this.songsList = data.items;
    });
  }

}
