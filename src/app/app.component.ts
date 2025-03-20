import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { HomeComponent } from './home/home.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CalculadoraDeIMCComponent } from './calculadora-de-imc/calculadora-de-imc.component';
import { ConversorDeTemperaturaComponent } from './conversor-de-temperatura/conversor-de-temperatura.component';
import { ApoliceDeSeguroComponent } from './apolice-de-seguro/apolice-de-seguro.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuSuperiorComponent,HomeComponent, MediaSimplesComponent, CalculadoraComponent, PaginaNaoEncontradaComponent,CalculadoraDeIMCComponent,ConversorDeTemperaturaComponent,ApoliceDeSeguroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AC1';
}
