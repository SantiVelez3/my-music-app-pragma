import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './atomic-design-arch/pages/home-page/home-page.component';
import { LoginPageComponent } from './atomic-design-arch/pages/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'auth', component:LoginPageComponent, pathMatch:'full'},
  {path:'home', component:HomePageComponent, pathMatch:'full', canActivate:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
