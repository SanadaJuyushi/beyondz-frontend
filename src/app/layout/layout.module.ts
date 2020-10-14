import { MaterialModule } from './../material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from '../welcome/welcome.component';


@NgModule({
  declarations: [
    LayoutComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
