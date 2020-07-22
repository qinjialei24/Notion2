import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuSidebarComponent } from './bu-sidebar/bu-sidebar.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { BuContentComponent } from './bu-content/bu-content.component';



@NgModule({
  declarations: [BuSidebarComponent, BuContentComponent],
  imports: [
    CommonModule,
    BasicComponentsModule
  ],
  exports: [BuSidebarComponent, BuContentComponent]
})
export class BusinessComponentsModule { }
