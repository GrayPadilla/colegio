import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes-asistencia',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './reportes-asistencia.page.html',
  styleUrls: ['./reportes-asistencia.page.scss'],
})
export class ReportesAsistenciaPage {

  constructor(private navCtrl: NavController) {}

  goToNuevoReporte() {
    this.navCtrl.navigateForward('/nuevo-reporte');
  }

  reportes = [
  {
    id: '1',
    titulo: 'Asistencia mensual - 1ro A',
    fecha: '15/05/2025',
    tipo: 'Asistencia'
  },
  {
    id: '2',
    titulo: 'Informe de conducta - Abril',
    fecha: '10/05/2025',
    tipo: 'Actividad'
  },
  {
    id: '3',
    titulo: 'Reunión con Padres - 2do B',
    fecha: '08/05/2025',
    tipo: 'Asistencia'
  }
];

verDetalle(id: string) {
  this.navCtrl.navigateForward(`/detalle-reporte/${id}`);
}





}
