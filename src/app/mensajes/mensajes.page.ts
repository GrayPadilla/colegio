import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss']
})
export class MensajesPage {
  // No se requiere lógica por ahora porque todo está en el HTML
}
