import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { NavbarLinksComponent } from './navbar-links/navbar-links.component';
import { SongCardComponent } from './song-card/song-card.component';



@NgModule({
  declarations: [
    NavbarLinksComponent,
    SongCardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    NavbarLinksComponent,
    SongCardComponent
  ]
})
export class MoleculesModule { }
