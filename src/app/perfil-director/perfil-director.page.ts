import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-director',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './perfil-director.page.html',
  styleUrls: ['./perfil-director.page.scss'],
})
export class PerfilDirectorPage {
  perfil = {
    nombre: 'Juan Pérez',
    correo: 'director@colegio.edu.pe',
    telefono: '987654321',
    cargo: '',
    departamento: '',
    fechaIngreso: ''
  };

  guardarCambios() {
    console.log('Datos guardados:', this.perfil);
    // Aquí podrías llamar a un servicio para guardar los datos en backend
  }
}
