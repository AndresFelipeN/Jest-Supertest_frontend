import { Component } from '@angular/core';

@Component({
  selector: 'app-matematicas',
  standalone: true,
  imports: [],
  templateUrl: './matematicas.component.html',
  styleUrl: './matematicas.component.css'
})
export class MatematicasComponent {

  sumar (a:number, b:number){
    return a + b
  }

}
