import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  urlImagem: String = "https://i2.wp.com/www.sspms.com.br/v2/wp-content/uploads/2023/10/facns.jpg?fit=958%2C600&ssl=1";



}
