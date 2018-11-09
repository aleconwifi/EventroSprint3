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

  //variables mostrar resultados de la busqueda
  searchResults = [];
  showList = true;
  showResults = [];
  results = false;
  noResults = false;





  constructor(public navCtrl: NavController,
                 public navParams: NavParams,
                private evento: EventoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchEvento(){
    this.showList = true;
    this.evento.searchEvento(this.nombre)
      .subscribe(res =>{
        if(res.results.length > 0){
          this.results = true;
          this.noResults = true;
          this.showResults = res.results;
          this.searchResults = res.results;

        }else{
          this.results = false;
          this.noResults = true;
          this.showResults = res.results;
          this.searchResults = [{"nombre": "No encontrado"}]
        }
      });

  }
//dejar de mostrar lista
  onCancel(event){
    this.showList = false;

  }

  onClear(event){
    this.showList = false;
    
  }

  //ir a un evento en especifico
  iraEvento(evento){
    this.showList = false;
    this.nombre = '';
    this.navCtrl.push("IreventoPage", {data: evento})
  }
}
