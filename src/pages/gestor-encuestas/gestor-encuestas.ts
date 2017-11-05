import { ListaEncuestasPage } from '../lista-encuestas/lista-encuestas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { AngularFireList} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-gestor-encuestas',
  templateUrl: 'gestor-encuestas.html',
})
export class GestorEncuestasPage {

  public formato : string = 'P';
  public cantidad : number = 1;

  public question : string = "";
  public nombre: string = "";
  public DateStart: Date;
  public DateEnd: Date;

  public option : Array<string> = ["","","","","",""];
  public respuesta : string = "";
  public encuesta : Array<any> = [];
  public cant : Array<number> = [1,2,3,4,5];


  //items: Observable<any[]>;
  Items: AngularFireList<any>;
  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
    //this.items = afDB.list('Encuestas').valueChanges();
    this.Items = afDB.list('Encuestas');
  }

  AgregarQuestion()
  { 
    var item : any = {};
    item.question = this.question;
    switch(this.formato)
    {
      case 'P':
        item.tipo = 'P';
        this.encuesta.push(item);
        break;
      case 'U':
        item.tipo = 'U';
        item.opciones= [];
        for(let i=1;i<=this.cantidad;i++)
        {
          item.opciones.push(this.option[i]);
        }
        this.encuesta.push(item);
        break;
      case 'M':
        item.tipo = 'M';
        item.opciones= [];
        for(let i=1;i<=this.cantidad;i++)
        {
          item.opciones.push(this.option[i]);
        }
        this.encuesta.push(item);
        break;
    }
    this.question = ""; 
    this.respuesta = "";
    this.cantidad = 1;
    this.formato = 'P';
    this.option = []
  }
  
  SubirQuestion()
  { 
    var item : any = {};
    item.Nombre = this.nombre;
    item.FechaComienzo = this.DateStart;
    item.FechaFin = this.DateEnd;
    item.Preguntas = this.encuesta;
    this.Items.push(item);
    //this.navCtrl.push(ListaEncuestasPage,{"encuesta":this.encuesta});
  }

  public mychange(event)
  {
    console.log(this.cantidad); // mymodel has the value before the change
  }

}
