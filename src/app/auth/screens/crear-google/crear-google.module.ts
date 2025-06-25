import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearGooglePageRoutingModule } from './crear-google-routing.module';

import { CrearGooglePage } from './crear-google.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearGooglePageRoutingModule
  ],
  declarations: [CrearGooglePage]
})
export class CrearGooglePageModule {}
