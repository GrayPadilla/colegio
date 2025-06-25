import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDirectorPageRoutingModule } from './perfil-director-routing.module';

import { PerfilDirectorPage } from './perfil-director.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDirectorPageRoutingModule
  ],
  declarations: [PerfilDirectorPage]
})
export class PerfilDirectorPageModule {}
