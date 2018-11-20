import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import * as _ from 'lodash'; //libreria para calcular el promedio

/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {

  eventos = []; //vector de eventos
  rating: number;

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
              private evento: EventoProvider) {
  }

  ionViewDidLoad() {
    this.getAllEventos();

  }

  getAllEventos(){
    this.evento.getEventos()
      .subscribe(res =>{
          console.log(res);
          this.eventos = res.result;
      });
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
    return this.redondearValores(this.rating);
  }



  redondearValores(value){
    const factor = Math.pow(10, 1);
    return Math.round(value * factor) / factor;
  }

}
