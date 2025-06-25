import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportesAsistenciaPage } from './reportes-asistencia.page';

describe('ReportesAsistenciaPage', () => {
  let component: ReportesAsistenciaPage;
  let fixture: ComponentFixture<ReportesAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
