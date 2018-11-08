import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import moment from 'moment';

/**
 * Generated class for the VercomentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vercomentarios',
  templateUrl: 'vercomentarios.html',
})
export class VercomentariosPage {

  evento: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController ) {
    this.evento = this.navParams.get("eventoData");
  }

  ionViewDidLoad() {
  }

  // devuelve el promedio de tating del arreglo
  
  averageRating(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.mean(arr);
    }
  }

  //devuelve el tiempo de aanadido el comentario
  GetReviewTime = (time: number) => {
    return moment(time).fromNow();
  }

  mostrar(rating){
    let alert = this.alertCtrl.create({
      title: 'Comentario',
      subTitle: rating.review,
      buttons: ['OK']
    });

    alert.present();
  }




}
