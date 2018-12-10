import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiPage } from './multi';

import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    MultiPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiPage),
    CalendarModule,
  ],
})
export class MultiPageModule {}
