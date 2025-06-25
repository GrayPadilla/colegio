import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService, Agenda } from '../services/agenda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recordatorio',
  standalone: false,
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
})
export class RecordatorioPage implements OnInit {
  diaSeleccionado: number = new Date().getDate();
  mesSeleccionado: string = this.obtenerMes(new Date().getMonth());
  recordatorios$: Observable<Agenda[]> | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agendaService: AgendaService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['dia']) {
        this.diaSeleccionado = Number(params['dia']);
      }
      if (params['mes']) {
        this.mesSeleccionado = params['mes'];
      }

      this.cargarRecordatorios();
    });
  }

  obtenerMes(mesIndex: number): string {
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    return meses[mesIndex];
  }

  cargarRecordatorios() {
    this.recordatorios$ = this.agendaService.getAgendasPorDiaMes(
      this.diaSeleccionado,
      this.mesSeleccionado
    );
  }

  editarRecordatorio(agenda: Agenda) {
    const nuevoMotivo = prompt('Editar motivo:', agenda.motivo);
    if (nuevoMotivo !== null && nuevoMotivo.trim() !== '') {
      this.agendaService.actualizarAgenda(agenda.id!, { motivo: nuevoMotivo }).then(() => {
        this.cargarRecordatorios();
      });
    }
  }

  eliminarRecordatorio(agenda: Agenda) {
    if (confirm('¿Seguro de eliminar este recordatorio?')) {
      this.agendaService.eliminarAgenda(agenda.id!).then(() => {
        this.cargarRecordatorios();
      });
    }
  }

  irARegistrarAgenda() {
    const now = new Date();
    const anio = now.getFullYear();
    let horas = now.getHours();
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const turno = horas >= 12 ? 'PM' : 'AM';

    if (horas === 0) {
      horas = 12;
    } else if (horas > 12) {
      horas -= 12;
    }

    const hora = `${horas.toString().padStart(2, '0')}:${minutos}`;

    this.router.navigate(['/registrar-agenda'], {
      queryParams: {
        dia: this.diaSeleccionado,
        mes: this.mesSeleccionado,
        anio: anio,
        hora: hora,
        turno: turno
      }
    });
  }
}
