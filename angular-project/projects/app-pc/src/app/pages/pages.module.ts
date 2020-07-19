import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import * as MyCommonModule from 'common';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MyCommonModule.CommonModule,
    ComponentsModule,
  ],
  exports: [ComponentsModule, HomeComponent]
})
export class PagesModule { }
