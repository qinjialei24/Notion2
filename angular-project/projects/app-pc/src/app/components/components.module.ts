import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponentsModule } from './basic-components/basic-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicComponentsModule
  ],
  exports: [BasicComponentsModule]
})
export class ComponentsModule { }
