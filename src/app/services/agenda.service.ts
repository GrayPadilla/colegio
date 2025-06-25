import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Agenda {
  id?: string;
  motivo: string;
  fecha: string;
  hora: string;
  turno: string;
  dia?: number;
  mes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private firestore: AngularFirestore) {}

  // Agregar nuevo recordatorio
  addAgenda(agenda: Agenda) {
    const [anio, mes, dia] = agenda.fecha.split('-');
    const mesAbrev = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'][parseInt(mes)-1];

    return this.firestore.collection('agendas').add({
      motivo: agenda.motivo,
      fecha: agenda.fecha,
      hora: agenda.hora,
      turno: agenda.turno,
      dia: Number(dia),
      mes: mesAbrev
    });
  }

  // Obtener agendas por día y mes
  getAgendasPorDiaMes(dia: number, mes: string): Observable<Agenda[]> {
    return this.firestore.collection<Agenda>('agendas', ref =>
      ref.where('dia', '==', dia).where('mes', '==', mes)
    ).valueChanges({ idField: 'id' });
  }

  // Actualizar motivo de un recordatorio
  actualizarAgenda(id: string, data: Partial<Agenda>) {
    return this.firestore.collection('agendas').doc(id).update(data);
  }

  // Eliminar un recordatorio
  eliminarAgenda(id: string) {
    return this.firestore.collection('agendas').doc(id).delete();
  }
}
