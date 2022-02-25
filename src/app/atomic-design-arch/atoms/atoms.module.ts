import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LogOutButtonComponent } from './log-out-button/log-out-button.component';
import { FavoritesButtonComponent } from './favorites-button/favorites-button.component';
import { FavHeartButtonComponent } from './fav-heart-button/fav-heart-button.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LoaderComponent,
    LogOutButtonComponent,
    FavoritesButtonComponent,
    FavHeartButtonComponent,
    HomeButtonComponent,
    ProfileButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeButtonComponent,
    FavoritesButtonComponent,
    LogOutButtonComponent
  ]
})
export class AtomsModule { }
