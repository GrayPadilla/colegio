import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAgendaPage } from './registrar-agenda.page';

describe('RegistrarAgendaPage', () => {
  let component: RegistrarAgendaPage;
  let fixture: ComponentFixture<RegistrarAgendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
