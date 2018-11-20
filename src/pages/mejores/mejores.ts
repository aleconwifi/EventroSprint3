import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the MejoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mejores',
  templateUrl: 'mejores.html',
})
export class MejoresPage {

  eventos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private evento: EventoProvider ) {
  }

  ionViewDidLoad() {
    this.evento.leaderBoard()
    .subscribe(res=>{
      this.eventos = res.result

    })
  }

  Irevento(evento){
    this.navCtrl.push("IreventoPage", {"data": evento});
  }

}
