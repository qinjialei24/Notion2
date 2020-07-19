import { NgModule } from '@angular/core';
import { GlobalModuleComponent } from './global-module.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [GlobalModuleComponent],
  imports: [
    ComponentsModule
  ],
  exports: [GlobalModuleComponent, ComponentsModule]
})
export class GlobalModuleModule { }
