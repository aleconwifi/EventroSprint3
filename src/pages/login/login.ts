import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  loading: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private reg: RegisterProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private storage: Storage) {
  }

  


  ionViewDidLoad() {

  }

  registerPage(){
    this.navCtrl.push("RegisterPage");

  }



  login(){
     //PRUEBAS VALIDACIONES AL DEJAR CAMPOS VACIOS
    if(this.email !== undefined || this.password !== undefined){
      this.showLoading();
      //loginUser , metodo del servicio Register, hace el post con el backend
      this.reg.loginUser(this.email, this.password)
        .subscribe(res => {
          this.loading.dismiss();
          if(res.user){
            this.storage.set('useremail', res.user.email);
            this.navCtrl.setRoot("HomePage");
          }

          if(res.error){
          //Alert Controller, desplegarlo si hay error y mostrar el error del backend

            let alert = this.alertCtrl.create({
              title: 'Error Inicio de Sesion',
              subTitle: res.error,
              buttons: ['OK']
            });

            alert.present();
          }
        });
        this.password = '';
        this.email = '';
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error Inicio de Sesion',
        subTitle: 'No puedes colocar campos vacios',
        buttons: ['OK']
      });

      alert.present();
    }
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Autenticando...no pises el saman'
    });    

    this.loading.present();
  }

}
