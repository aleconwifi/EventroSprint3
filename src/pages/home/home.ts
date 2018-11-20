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
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private evento: EventoProvider) {

  }

  ionViewDidLoad() {
      this.evento.getEmail().then(result =>{
        this.getData(result)
      });
   
  }

  //metodo para obtener data del usuario 
    //guardado en localstorage
  getData(email) {
    this.evento.getUserData(email).subscribe(res =>{
      this.user = res.user;
    })
  }

  openPage(){
    this.navCtrl.push("CreareventoPage");
  }

  reviewPage(){
    this.navCtrl.push("AsistirePage");
  }

  MejoresPage(){
    this.navCtrl.push("MejoresPage");
  }

  iraSearch(){
    this.navCtrl.push("SearchPage");


  }

  ircategorias(){
    this.navCtrl.push("EventosPage");


  }

}
