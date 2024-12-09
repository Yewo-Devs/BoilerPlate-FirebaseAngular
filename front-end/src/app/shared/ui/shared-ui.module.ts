import { NgModule } from '@angular/core';
import { TextInputModule } from './text-input/text-input.module';
import { NavModule } from './nav/nav.module';
@NgModule({
  imports: [TextInputModule, NavModule],
  exports: [TextInputModule, NavModule],
})
export class SharedUiModule {}
