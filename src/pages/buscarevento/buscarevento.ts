import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import * as _ from 'lodash';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the BuscareventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscarevento',
  templateUrl: 'buscarevento.html',
})
export class BuscareventoPage {

  irEvento: any;
  nombre: string;

  evento: any;
  
  user: any;


 

  constructor(public navCtrl: NavController,
                 public navParams: NavParams,
                  private eventoP: EventoProvider,
                  private alertCtrl: AlertController,
                  private toastCtrl: ToastController,
                  ) {
    //esto es lo mas importante
    //le pasas la data del irEvento(evento) toma la data del evento y la pasa con el navParams
    this.evento = this.navParams.get("data");
    console.log(this.evento);
    this.nombre = this.evento.nombre;
  }

  ionViewDidLoad() {
    this.eventoP.getEmail().then(result =>{
      this.getData(result)
    });
    
  }

   //metodo para obtener data del usuario 
    //guardado en localstorage
    getData(email) {
      this.eventoP.getUserData(email).subscribe(res =>{
        this.user = res.user;
      })
    }

   
  valorarPage(evento){
    this.navCtrl.push("ValoracionesPage", {"data": evento});
  }

  verComentarios(evento){
    this.navCtrl.push("VercomentariosPage", {"eventoData": evento});
  }

  verAsistentes(evento){
    this.navCtrl.push("AmigosPage", {"eventoData": evento});
  }

  averageRating(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return this.redondearValores(_.mean(arr));
    }
  }

  
  redondearValores(value){
    const factor = Math.pow(10, 1);
    return Math.round(value * factor) / factor;
  }

    //la suma de estrellas del array del raiting
  ratingSum(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.sum(arr);
    }
  }

  asistire(evento){
    this.eventoP.registerAsistente(evento, this.user)
    .subscribe(res=>{
     
    });

    this.eventoP.registerEvento (evento, this.user)
    .subscribe(res=>{
      if(res.message){
        let toast = this.toastCtrl.create({
          message: res.message,
          duration: 2000,
          position: 'top'
        });

  
        toast.present();
      }

      if(res.error){
        let toast = this.toastCtrl.create({
          message: res.error,
          duration: 3000,
          position: 'top'
        });
  
        toast.present();
      }
     
    });

    this.navCtrl.setRoot("HomePage");

  }






  asisti(evento){
  this.eventoP.registerEvento (evento, this.user)
  .subscribe(res=>{
     

    });

    




  }




}
