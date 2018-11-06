import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  nombre: string;

  constructor(public navCtrl: NavController,
                 public navParams: NavParams,
                private evento: EventoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchEvento(){
    this.evento.searchEvento(this.nombre)
      .subscribe(res =>{
        console.log(res)
      });

  }

  onCancel(){

  }

  onClear(){
    
  }
}
