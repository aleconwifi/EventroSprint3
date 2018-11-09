import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user: any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private evento: EventoProvider) {

  }

  ionViewDidLoad() {
    this.evento.getUserData()
    .subscribe(res =>{
      this.user = res.user;
    });
  }

  openPage(){
    this.navCtrl.push("CreareventoPage");
  }

  reviewPage(){
    this.navCtrl.push("EventosPage");
  }

  iraSearch(){
    this.navCtrl.push("SearchPage");


  }

  ircategorias(){
    this.navCtrl.push("CategoriasPage");


  }

}
