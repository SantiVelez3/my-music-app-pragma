import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './atomic-design-arch/pages/home-page/home-page.component';
import { LoginPageComponent } from './atomic-design-arch/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'auth', component:LoginPageComponent, pathMatch:'full'},
  {path:'home', component:HomePageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
