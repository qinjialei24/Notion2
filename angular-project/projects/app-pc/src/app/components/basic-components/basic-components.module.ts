import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ApiService } from 'global-module';
// import { ApiService } from 'common';

@NgModule({
  declarations: [FormDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormDemoComponent]
})
export class BasicComponentsModule { }
