import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
  ],
})
export class CalendarPageModule {}
