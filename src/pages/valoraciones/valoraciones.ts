import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';

/**
 * Generated class for the ValoracionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valoraciones',
  templateUrl: 'valoraciones.html',
})
export class ValoracionesPage {

  duracion: number;
  horario: number;
  aporte: number;
  review: string;
  userId: any;

  irEvento: any;
  nombre: string;

  constructor(public navCtrl: NavController, 
                  public navParams: NavParams,
                  private evento: EventoProvider,
                  private toastCtrl: ToastController) {
      this.irEvento = this.navParams.get("data");
      this.nombre = this.irEvento.nombre;
  }


  ionViewDidLoad() {
    this.evento.getEmail().then(result=>{
      this.getData(result);
    })
  }
  //metodo que llama al servicio addComentario para agregar comentarios con valoraciones
  addReview(){
    this.evento.addComentario(this.irEvento._id, this.duracion, this.horario, this.aporte,this.review, this.userId)
      .subscribe(res=>{
        if(res.message){
          let toast = this.toastCtrl.create({
            message: res.message,
            duration: 3000,
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

  //obtener el id del usuario
  getData(email){
    this.evento.getUserData(email)
    .subscribe(res=>{
      console.log(res.user)
      //validacion para que no de el error del Id
      if(res.user !== null){
        this.userId = res.user._id;
      }
    });
  }



}
