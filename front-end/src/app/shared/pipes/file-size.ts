import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (isNaN(value)) {
      return '';
    }

    const kB = 1024;
    const mB = kB * 1024;
    const gB = mB * 1024;

    if (value >= gB) {
      return (value / gB).toFixed(2) + ' GB';
    } else if (value >= mB) {
      return (value / mB).toFixed(2) + ' MB';
    } else if (value >= kB) {
      return (value / kB).toFixed(2) + ' KB';
    } else {
      return value + ' bytes';
    }
  }
}
