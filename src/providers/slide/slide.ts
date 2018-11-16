import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SlideProvider {

  private data = [
    {
      category: 'Cultural',
      expanded: true,
      products:[
        {id: 0, name: 'Cervezada', ubicacion: 'Polar'},
        {id: 1, name: 'Parranda Navidena', ubicacion: 'Polar'},
        {id: 2, name: 'Toque de la Coral', ubicacion: 'Mendoza'},
        {id: 3, name: 'ROCK Festival', ubicacion: 'Sala de Musica'},

      ]
    },
    {
      category: 'Deportivo',
      expanded: false,
      products:[
        {id: 4, name: 'Partido Volibol', ubicacion: 'Futbol'},
        {id: 5, name: 'Parranda Basket', ubicacion: 'Polar'},
        {id: 6, name: 'Caimanera mujeres', ubicacion: 'cancha futbol '},

      ]
    },
    {
      category: 'Autoridades',
      expanded: false,
      products:[
        {id: 4, name: 'Aumento de Matricula', ubicacion: 'Polar'},
        {id: 5, name: 'Asignacion de Becas', ubicacion: 'Mendoza'},
        {id: 6, name: 'Conversatorio Situacion', ubicacion: 'Mendoza '},

      ]
    }
  ];

  private cart =  [];

  constructor(public http: HttpClient) { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    this.cart.push(product);
  }

}
