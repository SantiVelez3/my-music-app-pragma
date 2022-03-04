import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card-grid',
  templateUrl: './song-card-grid.component.html',
  styleUrls: ['./song-card-grid.component.css']
})
export class SongCardGridComponent implements OnInit {
  @Input() songs:any[]  = [];
  constructor() { }

  ngOnInit(): void {
  }

}
