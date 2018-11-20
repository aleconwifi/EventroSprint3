import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { EventoProvider } from '../providers/evento/evento';



@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;
  user: any;

  pages: any[];

  constructor(public platform: Platform, 
                public statusBar: StatusBar,
                 public splashScreen: SplashScreen,
                  private storage: Storage,
                  private evento: EventoProvider) {


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: 'HomePage', icon: 'home' },
      {title: 'Eventos', component: 'DiasPage', icon: 'list-box' },
      {title: 'Busqueda', component: 'SearchPage', icon: 'search' },
      {title: 'Los mejores', component: 'MejoresPage', icon: 'trophy' },
      {title: 'Categorias', component: 'CategoriasPage', icon: 'list-box' },
      {title: 'Asistiré', component: 'AsistirePage', icon: 'heart' },
      {title: 'Crear Evento', component: 'CreareventoPage', icon: 'add-circle' },
      
    ];

  }

  



  ngAfterViewInit(){}

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.evento.getEmail().then(result => {
        if(result === null){
          this.nav.setRoot("LoginPage");
        }

        if(result !== null){
          this.evento.getUserData(result)
          .subscribe(res=>{
            this.user = res.user;
           });
          this.nav.setRoot("HomePage");
        }
      });

      //revisa el email en el localstorage
   /*  this.storage.get('useremail').then(loggedIn=>{
          if(loggedIn === null){
            this.nav.setRoot("LoginPage");
          }

          if(loggedIn !== null){
            this.evento.getUserData()
            .subscribe(res=>{
              this.user = res.user;
             })
            this.nav.setRoot("HomePage");
          }
      });*/
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

  settings(){
    this.nav.push("AjustesPage");
  }

}