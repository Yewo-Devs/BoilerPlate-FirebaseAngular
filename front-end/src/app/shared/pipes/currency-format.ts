import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyFormat' })
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return '';
    return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
