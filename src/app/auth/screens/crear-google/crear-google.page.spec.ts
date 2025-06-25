import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearGooglePage } from './crear-google.page';

describe('CrearGooglePage', () => {
  let component: CrearGooglePage;
  let fixture: ComponentFixture<CrearGooglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
