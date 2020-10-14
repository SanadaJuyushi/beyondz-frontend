import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routers: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
