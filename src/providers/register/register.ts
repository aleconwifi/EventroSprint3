import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {
  }

  //funcion que recibe como parametros el nombre, email y contrasena
  //crea un nuevo usuario y por el url lo lleva al controller del backend
  registerUser(fullname, email, password): Observable<any>{
    return this.http
    .post('https://backendeventro.herokuapp.com/api/signup/user',{
        fullname: fullname,
        email: email,
        password: password
    });
  }



  loginUser(email, password): Observable<any>{
    return this.http
      .post('https://backendeventro.herokuapp.com/api/login/user', {
        email: email,
        password: password
      });
  }

  
}
