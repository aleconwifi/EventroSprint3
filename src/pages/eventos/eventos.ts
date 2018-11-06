import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos = [];
  rating: number = 5;

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

}
