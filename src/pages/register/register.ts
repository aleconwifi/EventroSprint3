import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, 
        NavController, //navegacion entre paginas
         NavParams, 
         LoadingController, //mostrar animacion de cargando
         AlertController } from 'ionic-angular'; //mostrar errores en registro
import { RegisterProvider } from '../../providers/register/register';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fullname: string;
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

  loginPage(){
    this.navCtrl.setRoot("LoginPage");

  }


  userSignup(){
    //PRUEBAS VALIDACIONES AL DEJAR CAMPOS VACIOS
    if(this.fullname !== undefined || this.email !== undefined || this.password !== undefined){
    //subscribe de registro, llama al metodo del servicio

      this.showLoading();
      this.reg.registerUser(this.fullname, this.email, this.password)
        .subscribe(res => {
          this.loading.dismiss();
          //si se crea el usuario, lo mando al home
          if(res.user){
            this.storage.set('useremail', res.user.email);
            this.navCtrl.setRoot("HomePage");
          }

          if(res.error){
            //Alert Controller, desplegarlo si hay error y mostrar el error del backend
            let alert = this.alertCtrl.create({
              title: 'Error de registro',
              subTitle: res.error,
              buttons: ['OK']
            });

            alert.present();
          }
        });

        this.fullname = '';
        this.password = '';
        this.email = '';
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error de Registro',
        subTitle: 'No puedes colocar campos vacios',
        buttons: ['OK']
      });

      alert.present();
    }
  }
  
  //ventana que aparece mientras carga el registro
  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...no pises el saman',
      duration: 3000
    });

    this.loading.present(); //monstar el loading
  }



}
