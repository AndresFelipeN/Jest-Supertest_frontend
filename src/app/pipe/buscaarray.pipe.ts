import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscaarray',
  standalone: true
})
export class BuscaarrayPipe implements PipeTransform {

  transform(value: any[], posicion?: number): string {
    if (posicion == undefined){
      return value [0]
    }
    else{
      return value [posicion];
    }
  }

}
