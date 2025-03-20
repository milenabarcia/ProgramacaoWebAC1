import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-de-imc',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora-de-imc.component.html',
  styleUrl: './calculadora-de-imc.component.css'
})
export class CalculadoraDeIMCComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  classificacao: string | undefined;

  calcularIMC() {
    if (this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);

      if (this.imc < 18.5) {
        this.classificacao = 'Abaixo do peso';
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.classificacao = 'Peso normal';
      } else if (this.imc >= 25 && this.imc <= 29.9) {
        this.classificacao = 'Sobrepeso';
      } else if (this.imc >= 30 && this.imc <= 34.9) {
        this.classificacao = 'Obesidade grau I';
      } else if (this.imc >= 35 && this.imc <= 39.9) {
        this.classificacao = 'Obesidade grau II';
      } else if (this.imc >= 40) {
        this.classificacao = 'Obesidade grau III';
      }
    } else {
      alert('Por favor, insira valores válidos para peso e altura.');
    }
  }

}
