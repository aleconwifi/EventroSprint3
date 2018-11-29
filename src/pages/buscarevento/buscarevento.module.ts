import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscareventoPage } from './buscarevento';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuscareventoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscareventoPage),
    ComponentsModule
  ],
})
export class BuscareventoPageModule {}
