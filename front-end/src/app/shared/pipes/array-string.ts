import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayToString' })
export class ArrayStringPipe implements PipeTransform {
  transform(value: string[]): string {
    let result: string = '';
    value.forEach((element) => {
      result += element + ', ';
    });

    return result.substring(0, result.length - 2);
  }
}
