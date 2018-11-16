import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RegisterProvider } from '../providers/register/register';
import { HttpClientModule } from '@angular/common/http';
import { EventoProvider } from '../providers/evento/evento';
import { Camera } from '@ionic-native/camera';
import { SlideProvider } from '../providers/slide/slide';


@NgModule({
  declarations: [
    MyApp,
  
 
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterProvider,
    EventoProvider,
    Camera,
    SlideProvider
  ]
})
export class AppModule {}