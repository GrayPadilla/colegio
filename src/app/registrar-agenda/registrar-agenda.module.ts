import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAgendaPageRoutingModule } from './registrar-agenda-routing.module';

import { RegistrarAgendaPage } from './registrar-agenda.page';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAgendaPageRoutingModule,
    AngularFirestoreModule
  ],
  declarations: [RegistrarAgendaPage]
})
export class RegistrarAgendaPageModule {}
