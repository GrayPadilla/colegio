import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detalle-reporte',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './detalle-reporte.page.html',
  styleUrls: ['./detalle-reporte.page.scss'],
})
export class DetalleReportePage {
  reporte: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cargarReporte(id);
  }

  cargarReporte(id: string | null) {
    const reportesSimulados = [
      {
        id: '1',
        titulo: 'Asistencia mensual - 1ro A',
        tipo: 'Asistencia',
        fecha: '15/05/2025',
        gradoSeccion: '1ro A',
        descripcion: 'Se registraron 3 faltas y 2 tardanzas en el mes.'
      },
      {
        id: '2',
        titulo: 'Informe de conducta - Abril',
        tipo: 'Actividad',
        fecha: '10/05/2025',
        gradoSeccion: '2do B',
        descripcion: 'Se observaron mejoras en el comportamiento de la mayoría de estudiantes.'
      },
      {
        id: '3',
        titulo: 'Reunión con Padres - 2do B',
        tipo: 'Asistencia',
        fecha: '08/05/2025',
        gradoSeccion: '2do B',
        descripcion: 'Se realizó una reunión para tratar temas de rendimiento académico.'
      }
    ];

    this.reporte = reportesSimulados.find(r => r.id === id);
  }

  generarPDF() {
    const elemento = document.getElementById('reporte-pdf');
    if (!elemento) return;

    html2canvas(elemento).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('reporte.pdf');
    });
  }
}
