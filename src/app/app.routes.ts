import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CalculadoraDeIMCComponent } from './calculadora-de-imc/calculadora-de-imc.component';
import { ConversorDeTemperaturaComponent } from './conversor-de-temperatura/conversor-de-temperatura.component';
import { ApoliceDeSeguroComponent } from './apolice-de-seguro/apolice-de-seguro.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'media-simples', component: MediaSimplesComponent },
  { path: 'calculadora-de-imc', component : CalculadoraDeIMCComponent },
  { path: 'conversor-de-temperatura', component : ConversorDeTemperaturaComponent},
  { path: 'apolice-de-seguro', component : ApoliceDeSeguroComponent},
  { path: '**', component: PaginaNaoEncontradaComponent }
];
