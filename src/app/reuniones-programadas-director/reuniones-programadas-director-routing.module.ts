import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunionesProgramadasDirectorPage } from './reuniones-programadas-director.page';

const routes: Routes = [
  {
    path: '',
    component: ReunionesProgramadasDirectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionesProgramadasDirectorPageRoutingModule {}
