import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router'; // <-- AGREGA Router AQUÍ

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage {

  constructor(private router: Router) {} // Ahora funcionará

  goToReuniones() {
    this.router.navigate(['/reuniones-programadas-director']);
  }
  goToPerfil() {
  this.router.navigate(['/perfil-director']);
}
goToMensajes() {
  this.router.navigate(['/mensajes']);
}
goToConfiguracion() {
  this.router.navigate(['/configuracion']);
}
goToReportes() {
  this.router.navigate(['/reportes-asistencia']);
}
goToCalendario() {
  this.router.navigate(['/calendario']);
}

}
