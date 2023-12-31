import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgchartComponent } from './svg-chart/svg-chart.component';

const routes: Routes = [
  { path: 'chart', component: SvgchartComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
