import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaLayoutComponent } from './ba-layout/ba-layout.component';
import { BaNavigatorComponent } from './ba-navigator/ba-navigator.component';

@NgModule({
  declarations: [FormDemoComponent, BaLayoutComponent, BaNavigatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormDemoComponent, BaLayoutComponent, BaNavigatorComponent]
})
export class BasicComponentsModule { }
