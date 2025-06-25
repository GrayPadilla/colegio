import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes-asistencia',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './reportes-asistencia.page.html',
  styleUrls: ['./reportes-asistencia.page.scss'],
})
export class ReportesAsistenciaPage {
  // No es necesario tener la lista aquí ya que se muestra manualmente en el HTML
}
