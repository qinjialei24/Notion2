import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaLayoutComponent } from './ba-layout/ba-layout.component';
import { BaNavigatorComponent } from './ba-navigator/ba-navigator.component';
import { BaFormComponent } from './ba-form/ba-form.component';
import { BaFormItemComponent } from './ba-form-item/ba-form-item.component';
import { BaTreeComponent } from './ba-tree/ba-tree.component';

@NgModule({
  declarations: [FormDemoComponent, BaLayoutComponent, BaNavigatorComponent, BaFormComponent, BaFormItemComponent, BaTreeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [FormDemoComponent, BaLayoutComponent, BaNavigatorComponent]
})
export class BasicComponentsModule { }
