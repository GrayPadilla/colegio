import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDirectorPage } from './perfil-director.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDirectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDirectorPageRoutingModule {}
