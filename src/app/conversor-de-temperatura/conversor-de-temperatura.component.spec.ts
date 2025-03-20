import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDeTemperaturaComponent } from './conversor-de-temperatura.component';

describe('ConversorDeTemperaturaComponent', () => {
  let component: ConversorDeTemperaturaComponent;
  let fixture: ComponentFixture<ConversorDeTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversorDeTemperaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorDeTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
