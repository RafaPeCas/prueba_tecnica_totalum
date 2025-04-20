import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centToEuro'
})
export class CentToEuroPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'number') return '';
    const euros = value / 100;
    return euros.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }
}