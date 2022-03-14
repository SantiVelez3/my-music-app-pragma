import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TemplatesModule } from '../templates/templates.module';
import { OrganismModule } from '../organism/organism.module';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    OrganismModule
  ],
  exports:[
    LoginPageComponent,
    HomePageComponent
  ]
})
export class PagesModule { }
