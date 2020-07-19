import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as MyCommonModule from 'common';



@NgModule({
  declarations: [FormDemoComponent],
  imports: [
    CommonModule,
    MyCommonModule.CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormDemoComponent]
})
export class BasicComponentsModule { }
