import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaLayoutComponent } from './ba-layout/ba-layout.component';

@NgModule({
  declarations: [FormDemoComponent, BaLayoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormDemoComponent, BaLayoutComponent]
})
export class BasicComponentsModule { }
