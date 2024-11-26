import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], campo: string, criterio:string): any [] {
    if (criterio == "" || criterio == undefined){
      return value
    }
    else {
      const regex = new RegExp(criterio, 'i'); //crea la exprecion regular 
      return value.filter(( item => regex.test(item[campo])));
    }

    
  }

}
