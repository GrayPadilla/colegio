import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReunionesProgramadasDirectorPage } from './reuniones-programadas-director.page';

describe('ReunionesProgramadasDirectorPage', () => {
  let component: ReunionesProgramadasDirectorPage;
  let fixture: ComponentFixture<ReunionesProgramadasDirectorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionesProgramadasDirectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
