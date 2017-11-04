import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-alumno',
  templateUrl: 'registro-alumno.html',
})
export class RegistroAlumnoPage {

  alumnos : any[] = [{
    legajo : 104321, nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  },{
    legajo : 104321, nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  },{
    legajo : 104321, nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  },{
    legajo : 104321, nomApe : "Pollio, Juan Martín", sexo : "Masculino", email : "juanmartinpollio@gmail.com"
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroAlumnoPage');
  }

}
