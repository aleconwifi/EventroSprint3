import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento/evento';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  user: any;
  imagePath: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
                private evento : EventoProvider,
                private camera: Camera) {
  }


  ionViewDidEnter() {}

  ionViewDidLoad() {
    this.evento.getEmail().then(result =>{
      this.getData(result)
    });
    
  }

   //metodo para obtener data del usuario 
    //guardado en localstorage
    getData(email) {
      this.evento.getUserData(email).subscribe(res =>{
        this.user = res.user;
      })
    }

 

  agregarImagen(){
    const options: CameraOptions = {
      quality: 50, //probar con 75 y 100
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG, //probar con PNG
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 300,
      targetHeight: 300,
    }

    this.camera.getPicture(options).then((imgUrl) => {
      this.imagePath = 'data:image/jpeg;base64,' + imgUrl

      this.evento.uploadImage(this.user, this.imagePath)
        .subscribe(res => {
          console.log(res)
        });
    })

  }

  addLogo(name){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 300,
      targetHeight: 300,
    }

    this.camera.getPicture(options).then((imgUrl) => {
      this.imagePath = 'data:image/jpeg;base64,' + imgUrl

      this.evento.uploadEvento(name._id, this.imagePath)
        .subscribe(res => {
          console.log(res)
        });
    })
  }
}
