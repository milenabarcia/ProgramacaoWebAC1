import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'app-media-simples',
  imports: [FormsModule],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplesComponent {

  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number | null = null;
  status: string | undefined;

  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);

    if (this.media >= 5) {
      this.status = 'Aprovado';
    } else {
      this.status = 'Reprovado';
    }
  }
}
