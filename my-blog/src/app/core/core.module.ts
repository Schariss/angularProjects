import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    // The routerLink and routerLinkActive directives are part of the Angular router package. 
    // We need to import RouterModule in the core module to use them
    RouterModule
  ],
  exports: [
    // So that other modules can use it
    HeaderComponent
  ]
})
export class CoreModule { }
