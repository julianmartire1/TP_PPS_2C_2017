import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroProAdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-pro-adm',
  templateUrl: 'registro-pro-adm.html',
})
export class RegistroProAdmPage {

  personal : any[] = [{
    empleo : "Profesor", nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  },{
    empleo : "Profesor", nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  },{
    empleo : "Profesor", nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  },{
    empleo : "Profesor", nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroProAdmPage');
  }

}
