import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { closeOutline, eyeOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-reportes',
  standalone: true,
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ReportesPage {
  reportes = [
    {
      titulo: 'Asistencia mensual - 1ro A',
      fecha: '2025-05-15',
      tipo: 'Asistencia',
      descripcion: 'Resumen de asistencia del mes para el 1ro A.'
    },
    {
      titulo: 'Informe de conducta - Abril',
      fecha: '2025-05-10',
      tipo: 'Actividad',
      descripcion: 'Observaciones de comportamiento durante abril.'
    }
  ];

  mostrarDetalles = false;
  reporteSeleccionado: any = null;

  icons = {
    eye: eyeOutline,
    close: closeOutline,
    add: addCircleOutline
  };

  constructor(private modalCtrl: ModalController) {}

  abrirFormulario() {
    alert('Aquí iría el formulario para crear un nuevo reporte.');
  }

  verDetalles(reporte: any) {
    this.reporteSeleccionado = reporte;
    this.mostrarDetalles = true;
  }

  cerrarDetalles() {
    this.mostrarDetalles = false;
    this.reporteSeleccionado = null;
  }
}
