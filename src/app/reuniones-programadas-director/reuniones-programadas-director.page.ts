import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reuniones-programadas-director',
  standalone: true, // ✅ Esto es esencial
  imports: [CommonModule, IonicModule], // ✅ Módulos necesarios para HTML e Ionic
  templateUrl: './reuniones-programadas-director.page.html',
  styleUrls: ['./reuniones-programadas-director.page.scss'],
})
export class ReunionesProgramadasDirectorPage {
  constructor(private navCtrl: NavController) {}

  goToNuevaReunion() {
    this.navCtrl.navigateForward('/nueva-reunion');
  }
}
