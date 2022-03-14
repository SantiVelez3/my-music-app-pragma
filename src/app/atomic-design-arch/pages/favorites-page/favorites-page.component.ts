import { Component, OnInit } from '@angular/core';
import { TracksService } from 'src/app/core/services/tracks.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  favoriteSongs:any[] = [];

  constructor(private tracksService:TracksService) { }

  ngOnInit(): void {
    this.tracksService.getFavorites().subscribe(data =>{
      console.log(data.items);
    })

  }

}
