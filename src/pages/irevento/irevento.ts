import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

}
