import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './atomic-design-arch/pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './atomic-design-arch/pages/home-page/home-page.component';
import { LoginPageComponent } from './atomic-design-arch/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'auth', component:LoginPageComponent, pathMatch:'full'},
  {path:'home', component:HomePageComponent, pathMatch:'full', canActivate:[]},
  {path:'favorites', component:FavoritesPageComponent, pathMatch:'full', canActivate:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
