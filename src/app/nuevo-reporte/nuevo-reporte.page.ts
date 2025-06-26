import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './nuevo-reporte.page.html',
  styleUrls: ['./nuevo-reporte.page.scss'],
})
export class NuevoReportePage {
  tipoReporte: string = '';
  gradoSeccion: string = '';
  fecha: string = '';
  descripcion: string = '';

  constructor(private navCtrl: NavController) {}

  guardarReporte() {
    if (!this.tipoReporte || !this.gradoSeccion || !this.fecha) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    console.log('📄 Reporte guardado:', {
      tipo: this.tipoReporte,
      gradoSeccion: this.gradoSeccion,
      fecha: this.fecha,
      descripcion: this.descripcion
    });

    this.navCtrl.navigateBack('/reportes-asistencia');
  }
}
