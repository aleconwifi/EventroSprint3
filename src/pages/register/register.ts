import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public reg: RegisterProvider) {
  }

  ionViewDidLoad() {
   
  }

  loginPage(){
    this.navCtrl.setRoot("LoginPage");

  }

  userSignup(){
    this.reg.registerUser(this.fullname, this.email, this.password)
    .subscribe(res =>{
      console.log(res);
    });
  }

}
