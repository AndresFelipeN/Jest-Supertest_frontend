import { Component } from '@angular/core';
import { UsuariosComponent } from "../usuarios/usuarios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
