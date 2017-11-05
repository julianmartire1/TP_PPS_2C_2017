import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { EncuestaPage} from '../encuesta/encuesta';

/**
 * Generated class for the ListaEncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-encuestas',
  templateUrl: 'lista-encuestas.html',
})
export class ListaEncuestasPage {

  //public encuesta : Array<any> = this.navParams.get("encuesta");
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  public Cuestionarios: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    this.Items = afDB.list('Encuestas');
    this.items = this.Items.valueChanges();
    this.items.subscribe(
        quest => this.Cuestionarios = quest,
      );
    //this.Items.subscribe(profile => console.log(profile));
    
  }
  RealizarCuestionario(dato)
  {
    //console.log(dato);
    this.navCtrl.push(EncuestaPage,{"encuesta":dato});  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEncuestasPage');
  }

}
