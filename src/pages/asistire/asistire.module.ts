import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsistirePage } from './asistire';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    AsistirePage,
  ],
  imports: [
    IonicPageModule.forChild(AsistirePage),
    Ionic2RatingModule
  ],
})
export class AsistirePageModule {}
