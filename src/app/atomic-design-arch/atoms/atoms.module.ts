import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LogOutButtonComponent } from './log-out-button/log-out-button.component';
import { FavoritesButtonComponent } from './favorites-button/favorites-button.component';
import { FavHeartButtonComponent } from './fav-heart-button/fav-heart-button.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardImgComponent } from './card-img/card-img.component';
import { CardArtistComponent } from './card-artist/card-artist.component';



@NgModule({
  declarations: [
    LoaderComponent,
    LogOutButtonComponent,
    FavoritesButtonComponent,
    FavHeartButtonComponent,
    HomeButtonComponent,
    ProfileButtonComponent,
    CardTitleComponent,
    CardImgComponent,
    CardArtistComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeButtonComponent,
    FavoritesButtonComponent,
    LogOutButtonComponent,
    CardTitleComponent,
    CardImgComponent,
    CardArtistComponent
  ]
})
export class AtomsModule { }
