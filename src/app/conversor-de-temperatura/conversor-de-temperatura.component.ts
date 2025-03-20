import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-de-temperatura',
  imports: [FormsModule],
  templateUrl: './conversor-de-temperatura.component.html',
  styleUrl: './conversor-de-temperatura.component.css'
})
export class ConversorDeTemperaturaComponent {
  celsius: number = 0;
  fahrenheit: string = '';
  kelvin: string = '';

  converter(): void {
    if (!isNaN(this.celsius)) {
      this.fahrenheit = ((this.celsius * 9) / 5 + 32).toFixed(2);
      this.kelvin = (this.celsius + 273.15).toFixed(2);
    } else {
      this.fahrenheit = '';
      this.kelvin = '';
    }
  }
}
