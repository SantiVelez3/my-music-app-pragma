import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TemplatesModule } from '../templates/templates.module';
import { OrganismModule } from '../organism/organism.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent
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
