import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
    Ionic2RatingModule
  ],
})
export class CartPageModule {}
