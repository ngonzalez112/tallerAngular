import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSeriesComponent } from './Series/listar-series/listar-series.component';

const routes: Routes = [
  { path: '', redirectTo: '/series', pathMatch: 'full' },
  { path: 'series', component: ListarSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

