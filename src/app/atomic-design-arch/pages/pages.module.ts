import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginPageComponent,
    HomePageComponent
  ]
})
export class PagesModule { }
