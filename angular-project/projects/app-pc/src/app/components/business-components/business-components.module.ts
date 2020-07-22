import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuNavigatorComponent } from './bu-navigator/bu-navigator.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { BuContentComponent } from './bu-content/bu-content.component';



@NgModule({
  declarations: [BuNavigatorComponent, BuContentComponent],
  imports: [
    CommonModule,
    BasicComponentsModule
  ],
  exports: [BuNavigatorComponent]
})
export class BusinessComponentsModule { }
