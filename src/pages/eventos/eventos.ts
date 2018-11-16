import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import * as _ from 'lodash'; //libreria para calcular el promedio

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

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
