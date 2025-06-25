import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilDirectorPage } from './perfil-director.page';

describe('PerfilDirectorPage', () => {
  let component: PerfilDirectorPage;
  let fixture: ComponentFixture<PerfilDirectorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDirectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
