import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiseventoasistirPage } from './miseventoasistir';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    MiseventoasistirPage,
  ],
  imports: [
    IonicPageModule.forChild(MiseventoasistirPage),
    ComponentsModule
  ],
})
export class MiseventoasistirPageModule {}
