import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.css']
})
export class CardArtistComponent implements OnInit {
  @Input() artistName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
