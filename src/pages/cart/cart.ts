import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash'; //libreria para calcular el promedio
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  eventos = []; //vector de eventos
  rating: number;

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
              private eventoProvider: EventoProvider) {
  }
  getAllEventos(){
    this.eventos= this.eventoProvider.getCart();
  }
  Irevento(evento){
    this.navCtrl.push("IreventoPage", {"data": evento});
  }

  averageRating(number){
    if(number.length<=0){
      this.rating = number.length;
    } else{
      this.rating = _.mean(number)
    }

    return this.rating;
  }


  ionViewDidLoad() {
   this.getAllEventos();
   console.log(this.eventos);
  }

}
