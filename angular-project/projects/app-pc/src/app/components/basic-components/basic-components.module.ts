import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';



@NgModule({
  declarations: [FormDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [FormDemoComponent]
})
export class BasicComponentsModule { }
