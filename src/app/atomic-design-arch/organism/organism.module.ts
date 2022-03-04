import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SongCardGridComponent } from './song-card-grid/song-card-grid.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SongCardGridComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule
  ],
  exports:[
    NavBarComponent,
    SongCardGridComponent
  ]
})
export class OrganismModule { }
