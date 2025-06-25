import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearGooglePage } from './crear-google.page';

const routes: Routes = [
  {
    path: '',
    component: CrearGooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearGooglePageRoutingModule {}
