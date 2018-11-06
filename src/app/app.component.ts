import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;

  pages: any[];

  constructor(public platform: Platform, 
                public statusBar: StatusBar,
                 public splashScreen: SplashScreen,
                  private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: 'HomePage', icon: 'home' },
      {title: 'Crear Evento', component: 'CreareventoPage', icon: 'add-circle' },
      {title: 'Eventos', component: 'EventosPage', icon: 'list-box' },
      {title: 'Busqueda', component: 'HomePage', icon: 'search' },
      {title: 'Los mejores', component: 'HomePage', icon: 'archive' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //revisa el email en el localstorage
      this.storage.get('useremail').then(loggedIn=>{
          if(loggedIn === null){
            this.nav.setRoot("LoginPage");
          }

          if(loggedIn !== null){
            this.nav.setRoot("HomePage");
          }
      });
    });
  }
  //para poner el back automatico a las paginas que no son home
  openPage(page) {
  if(page.component ==="HomePage"){
    this.nav.setRoot(page.component);
  }else{
    this.nav.push(page.component);

  }
  }

  logout(){
    this.storage.remove('useremail');
    this.nav.setRoot("LoginPage");
  }
}
