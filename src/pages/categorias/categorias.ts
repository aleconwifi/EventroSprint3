import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SlideProvider } from '../../providers/slide/slide';
//import { Router } from '@angular/router';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
 
  cart = [];
  items = [];

  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cartService: SlideProvider,
              ) {
  }

  ionViewDidLoad() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
    }


 /* ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }
*/

  addToCart(product){
    this.cartService.addProduct(product);

  }

  openCart(){
    this.navCtrl.push("DiasPage")
  }

  

}
