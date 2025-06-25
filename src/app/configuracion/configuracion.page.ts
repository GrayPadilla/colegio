import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {
  constructor(private router: Router) {}
  notificacionesActivas = true;
  modoOscuro = false;

  toggleNotificaciones() {
    this.notificacionesActivas = !this.notificacionesActivas;
  }

  toggleDarkMode() {
    this.modoOscuro = !this.modoOscuro;
    document.body.classList.toggle('dark', this.modoOscuro);
  }

  cerrarSesion() {
    console.log('Sesión cerrada.');
    this.router.navigate(['/intro']);
    // Aquí puedes limpiar storage y redirigir al login
  }
}
