import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

/**
 * Generated class for the IreventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-irevento',
  templateUrl: 'irevento.html',
})
export class IreventoPage {

  irEvento: any;
  nombre: string;

  evento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //esto es lo mas importante
    //le pasas la data del irEvento(evento) toma la data del evento y la pasa con el navParams
    this.evento = this.navParams.get("data");
    console.log(this.evento);
    this.nombre = this.evento.nombre;
  }

  ionViewDidLoad() {
    
  }

  valorarPage(evento){
    this.navCtrl.push("ValoracionesPage", {"data": evento});
  }

  averageRating(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return this.roundValue(_.mean(arr));
    }
  }

  roundValue(value){
    const factor = Math.pow(10, 1);
    return Math.round(value * factor) / factor;
  }

  ratingSum(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.sum(arr);
    }
  }

}
