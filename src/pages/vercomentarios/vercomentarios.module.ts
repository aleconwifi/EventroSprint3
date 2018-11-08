import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VercomentariosPage } from './vercomentarios';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    VercomentariosPage,
  ],
  imports: [
    IonicPageModule.forChild(VercomentariosPage),
    ComponentsModule
  ],
})
export class VercomentariosPageModule {}
