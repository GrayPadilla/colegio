import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesAsistenciaPage } from './reportes-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesAsistenciaPageRoutingModule {}
