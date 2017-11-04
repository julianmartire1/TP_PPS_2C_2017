import { ListaEncuestasPage } from '../lista-encuestas/lista-encuestas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GestorEncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestor-encuestas',
  templateUrl: 'gestor-encuestas.html',
})
export class GestorEncuestasPage {

  public formato : string = 'P';
  public cantidad : number = 1;

  public question : string = "";
  public option : Array<string> = ["","","","","",""];
  public respuesta : string = "";
  public encuesta : Array<any> = [];
  public cant : Array<number> = [1,2,3,4,5];

  constructor(public navCtrl: NavController) {

  }

  AgregarQuestion()
  { 
    var item : any = {};
    item.question = this.question;
    switch(this.formato)
    {
      case 'P':
        item.name = this.encuesta.length-1;
        item.tipo = 'P';
        this.encuesta.push(item);
        break;
      case 'U':
        item.name = this.encuesta.length+1;
        item.tipo = 'U';
        item.opciones= [];
        for(let i=1;i<=this.cantidad;i++)
        {
          item.opciones.push(this.option[i]);
        }
        this.encuesta.push(item);
        break;
      case 'M':
        item.name = this.encuesta.length+1;
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
    console.log(this.option);
  }
  
  SubirQuestion()
  { 
    this.navCtrl.push(ListaEncuestasPage,{"encuesta":this.encuesta});
  }

  public mychange(event)
  {
    console.log(this.cantidad); // mymodel has the value before the change
  }

}
