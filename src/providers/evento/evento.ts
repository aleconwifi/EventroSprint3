
import { Storage } from '@ionic/storage';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {
  

  constructor(public http: HttpClient,
              private storage: Storage,
              )
   {
               
  }

  //a partir del email del localstorage, devolver el usuario
  getUserData(email): Observable<any>{

      return this.http
      .get(`https://backendeventro.herokuapp.com/api/home/${email}`);
  }


  //retorna el email que se guarda en el localstorage para 
  //saber quien crea el evento
  async getEmail(){
    return await this.storage.get('useremail');
  }
  //metodo que conecta al post de eventos con el backend
  createEvento(nombre, ubicacion, fecha, hora, descripcion, categoria, userId?): Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/evento/create',{
        nombre,
        ubicacion,
        fecha,
        hora,
        descripcion,
        categoria,
        userId
    });
  }

  getEventos(): Observable<any>{
    return this.http
      .get('https://backendeventro.herokuapp.com/api/eventos/all');
  }

  addComentario(eventoId, duracion, horario, aporte, review, userId): Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/evento/comentario',{
        eventoId,
        duracion,
        horario,
        aporte,
        review,
        userId
    });
  }

  registerAsistente(evento, user, role?): Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/register/asistente',{
        evento : evento,
        user: user,
        role: role

    });
  }

  registerEvento(evento, user): Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/register/asistire',{
        evento : evento,
        user: user,
    });
  }

  searchEvento(evento):  Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/search-evento',{
      evento: evento
     
  });

}

  searchEvento2(evento):  Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/search-evento2',{
      evento: evento
     
  });

  

  }

 

  uploadImage(user, image): Observable<any>{
    return this.http
      .post('https://backendeventro.herokuapp.com/api/v1/perfil/upload',{
        user: user,
        image: image

      });
  }

  uploadEvento(id, image): Observable<any>{
    return this.http  
      .post('https://backendeventro.herokuapp.com/api/v1/evento/upload', {
        evento: id,
        image: image
      });
  }

 

  leaderBoard(): Observable<any>{
    return this.http
      .get('https://backendeventro.herokuapp.com/api/eventos/leaderboard');
  }
 

}
