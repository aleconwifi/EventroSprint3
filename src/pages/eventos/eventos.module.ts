import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosPage),
    Ionic2RatingModule
  ],
})
export class EventosPageModule {}
