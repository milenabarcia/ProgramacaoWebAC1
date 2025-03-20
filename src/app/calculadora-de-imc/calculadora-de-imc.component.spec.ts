import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDeIMCComponent } from './calculadora-de-imc.component';

describe('CalculadoraDeIMCComponent', () => {
  let component: CalculadoraDeIMCComponent;
  let fixture: ComponentFixture<CalculadoraDeIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraDeIMCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraDeIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
