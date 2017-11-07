import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestaPage} from '../encuesta/encuesta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  public formato:string = 'P';
  public cantidad:number = 1;

  public question: string = "";
  public option:Array<string> = ["","","","","",""];
  public respuesta: string = "";
  public encuesta: Array<any> = [];
  public cant:Array<number> = [1,2,3,4,5];
  constructor(public navCtrl: NavController) {

  }
  AgregarQuestion()
  { 
    var item:any = {};
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
    this.navCtrl.setRoot(EncuestaPage,{"encuesta":this.encuesta});
  }
  public mychange(event)
  {
    console.log(this.cantidad); // mymodel has the value before the change
  }
}
