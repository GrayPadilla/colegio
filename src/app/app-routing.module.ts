import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrada',
    pathMatch: 'full'
  },
  {
    path: 'entrada',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./auth/screens/intro/intro.page').then(m => m.IntroPage)
  },
  {
    path: 'crear-cuenta',
    loadComponent: () =>
      import('./auth/screens/crear-cuenta/crear-cuenta.page').then(m => m.CrearCuentaPage)
  },
  {
    path: 'olvidar-contrasena',
    loadComponent: () => import('./auth/screens/olvidar-contrasena/olvidar-contrasena.page').then( m => m.OlvidarContrasenaPage)
  },
  {
    path: 'restablecer-contrasena',
    loadComponent: () => import('./auth/screens/restablecer-contrasena/restablecer-contrasena.page').then( m => m.RestablecerContrasenaPage)
  },
  {
    path: 'crear-google',
    loadComponent: () => import('./auth/screens/crear-google/crear-google.page').then( m => m.CrearGooglePage)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'recordatorio',
    loadChildren: () => import('./recordatorio/recordatorio.module').then( m => m.RecordatorioPageModule)
  },
  {
    path: 'registrar-agenda',
    loadChildren: () => import('./registrar-agenda/registrar-agenda.module').then( m => m.RegistrarAgendaPageModule)
  },
  {
    path: 'menu-principal',
    loadComponent: () => import('./menu-principal/menu-principal.page').then(m => m.MenuPrincipalPage)
  },
  {
    path: 'reuniones-programadas-director',
    loadChildren: () => import('./reuniones-programadas-director/reuniones-programadas-director.module').then( m => m.ReunionesProgramadasDirectorPageModule)
  },
  {
    path: 'perfil-director',
    loadComponent: () => import('./perfil-director/perfil-director.page').then(m => m.PerfilDirectorPage)
  },
    {
    path: 'mensajes',
    loadComponent: () => import('./mensajes/mensajes.page').then(m => m.MensajesPage)
  },
    {
    path: 'configuracion',
    loadComponent: () => import('./configuracion/configuracion.page').then(m => m.ConfiguracionPage)
  },
    {
    path: 'reportes-asistencia',
    loadComponent: () => import('./reportes-asistencia/reportes-asistencia.page').then(m => m.ReportesAsistenciaPage)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./reportes/reportes.page').then(m => m.ReportesPage)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
