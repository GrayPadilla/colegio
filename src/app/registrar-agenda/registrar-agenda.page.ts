import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService, Agenda } from '../services/agenda.service';

@Component({
  selector: 'app-registrar-agenda',
  standalone: false,
  templateUrl: './registrar-agenda.page.html',
  styleUrls: ['./registrar-agenda.page.scss'],
})
export class RegistrarAgendaPage implements OnInit {
  fechaSeleccionada: string = '';
  motivo: string = '';
  fecha: string = '';
  hora: string = '';
  turno: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private agendaService: AgendaService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dia = params['dia'];
      const mesNombre = params['mes'];
      const anio = params['anio'];
      const horaParam = params['hora'];
      const turnoParam = params['turno'];

      if (dia && mesNombre && anio) {
        this.fechaSeleccionada = `${dia} ${mesNombre} ${anio}`;

        const mesNumero = this.obtenerNumeroMes(mesNombre);
        const diaStr = dia.toString().padStart(2, '0');
        this.fecha = `${anio}-${mesNumero}-${diaStr}`;
        this.hora = horaParam ?? '';
        this.turno = turnoParam ?? '';
      } else {
        this.fechaSeleccionada = 'Sin fecha';
      }
    });
  }

  obtenerNumeroMes(mesAbreviado: string): string {
    const meses = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
    const index = meses.indexOf(mesAbreviado.toUpperCase());
    return (index + 1).toString().padStart(2, '0');
  }

  guardarAgenda() {

    const nuevaAgenda: Agenda = {
      motivo: this.motivo,
      fecha: this.fecha,
      hora: this.hora,
      turno: this.turno
    };

    this.agendaService.addAgenda(nuevaAgenda).then(() => {
      this.router.navigate(['/recordatorio'], {
        queryParams: {
          dia: Number(this.fecha.split('-')[2]),
          mes: this.obtenerNombreMes(Number(this.fecha.split('-')[1]) - 1)
        }
      });
    });
  }

  obtenerNombreMes(indice: number): string {
    const nombres = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
    return nombres[indice];
  }
}
