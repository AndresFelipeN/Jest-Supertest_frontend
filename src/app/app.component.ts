import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { BuscaarrayPipe } from './pipe/buscaarray.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './pipe/filtro.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MayusculaPipe, BuscaarrayPipe, FiltroPipe, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jest_Supertest_frontend';
  filtro: string = ""
  campo:string=  "nombre"
  datos:any [] = [{nombre:"Andres", correo:"felipegonnzalez@hotmail.com"},{nombre:"Felipe", correo:"jardtuexplain@gmail.com"}]
}
