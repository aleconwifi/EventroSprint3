import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SlideProvider } from '../../providers/slide/slide';
//import { Router } from '@angular/router';
import { EventoProvider } from '../../providers/evento/evento';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
 
  cart = [];
  items = [];
  eventos = [];

  nombre: string;


  //variables mostrar resultados de la busqueda
  searchResults = [];
  showList = true;
  showResults = [];
  results = false;
  noResults = false;

  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cartService: SlideProvider,
              private evento: EventoProvider
              ) {
  }

  ionViewDidLoad() {
    this.getAllEventos();
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
    }

    getAllEventos(){
      this.evento.getEventos()
        .subscribe(res =>{
            console.log(res);
            this.eventos = res.result;
        });
    }


 /* ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }
*/

  addToCart(product){
    this.cartService.addProduct(product);

  }

  searchEvento2(){
    this.showList = true;
    this.evento.searchEvento2(this.nombre)
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
          this.searchResults = [{"nombre": "No encontrado"}];
        }
      });

    
  }

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

  openCart(){
    this.navCtrl.push("DiasPage")
  }

  

}
