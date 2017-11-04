import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public encuesta : Array<any> = this.navParams.get("encuesta");

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEncuestasPage');
  }

}
