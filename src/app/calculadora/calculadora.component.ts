import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  operacao: string = 'soma';
  resultado: number | null = null;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'subtracao':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacao':
        this.resultado = this.num1 * this.num2;
        break;
      case 'divisao':
        if (this.num2 !== 0) {
          this.resultado = this.num1 / this.num2;
        } else {
          alert('Divisão por zero não é permitida!');
          this.resultado = null;
        }
        break;
      default:
        alert('Operação inválida!');
        this.resultado = null;
        break;
    }
  }
}



