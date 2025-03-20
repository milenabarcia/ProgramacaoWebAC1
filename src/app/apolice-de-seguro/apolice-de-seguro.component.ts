import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice-de-seguro',
  imports: [FormsModule],
  templateUrl:'./apolice-de-seguro.component.html',
  styleUrl: './apolice-de-seguro.component.css'
})
export class ApoliceDeSeguroComponent {
  nome: string = '';
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  calcularApolice(): void {
    if (this.sexo === 'masculino' && this.idade !== null && this.valorAutomovel !== null) {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.valorAutomovel * 0.10;
      }
    } else if (this.sexo === 'feminino' && this.valorAutomovel !== null) {
      this.valorApolice = this.valorAutomovel * 0.08;
    } else {
      this.valorApolice = null;
    }
  }
}
