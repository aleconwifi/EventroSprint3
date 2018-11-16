import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';


@IonicPage()
@Component({
  selector: 'page-crearevento',
  templateUrl: 'crearevento.html',
})
export class CreareventoPage {

  //atributos del objeto evento que se le pasan por
  //parametros a la funcion createEvento del provider
  nombre: string;
  ubicacion: string;
  fecha: string;
  hora: string;
  descripcion: string;
  categoria: string;
  userId: any;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
                private evento: EventoProvider,
                private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  ionViewDidEnter(){}

  ionViewDidLoad() {
    this.evento.getEmail().then(result =>{
      this.getData(result)
    });
 
}

//metodo para obtener data del usuario 
  //guardado en localstorage
getData(email) {
  this.evento.getUserData(email).subscribe(res =>{
    this.userId = res.user._id;
  })
}

  

  register(){
    this.evento.createEvento(this.nombre, this.ubicacion, this.fecha, this.hora, this.descripcion,this.categoria, this.userId)
      .subscribe(res =>{
          if(res.message){
            let toast = this.toastCtrl.create({
              message: res.message,
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }

          if(res.error){
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: res.error,
              buttons: ['OK']
            });
            alert.present();

          }
      });
      this.nombre= '';
      this.ubicacion= '';
      this.fecha= '';
      this.hora= '';
      this.descripcion= '';
      this.categoria= '';


  }

}
