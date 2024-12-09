import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
