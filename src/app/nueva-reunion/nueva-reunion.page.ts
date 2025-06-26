import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-reunion',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './nueva-reunion.page.html',
  styleUrls: ['./nueva-reunion.page.scss'],
})
export class NuevaReunionPage {
  asunto: string = '';
  participantes: string = '';
  fecha: string = '';
  hora: string = '';
  descripcion: string = '';
  duracion: string = '';
ubicacion: string = '';
responsable: string = '';
requiereConfirmacion: boolean = false;
observaciones: string = '';


  constructor(private navCtrl: NavController) {}

  guardarReunion() {
    if (!this.asunto || !this.participantes || !this.fecha || !this.hora) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    console.log('🗓️ Reunión guardada:', {
      asunto: this.asunto,
      participantes: this.participantes,
      fecha: this.fecha,
      hora: this.hora,
      descripcion: this.descripcion
    });

    this.navCtrl.navigateBack('/reuniones-programadas-director');
  }
}
