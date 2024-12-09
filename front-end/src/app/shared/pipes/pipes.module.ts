import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from './currency-format';
import { LineBreakPipe } from './line-break';
import { ArrayStringPipe } from './array-string';
import { FileSizePipe } from './file-size';
import { DatePipe } from './date';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DatePipe,
    CurrencyFormatPipe,
    LineBreakPipe,
    ArrayStringPipe,
    FileSizePipe,
  ],
  exports: [
    DatePipe,
    CurrencyFormatPipe,
    LineBreakPipe,
    ArrayStringPipe,
    FileSizePipe,
  ],
})
export class PipesModule {}
