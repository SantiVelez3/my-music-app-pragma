import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { NavbarLinksComponent } from './navbar-links/navbar-links.component';



@NgModule({
  declarations: [
    NavbarLinksComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    NavbarLinksComponent
  ]
})
export class MoleculesModule { }
