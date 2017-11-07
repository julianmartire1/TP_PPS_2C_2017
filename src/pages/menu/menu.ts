import { ListaAsistenciaPage } from '../lista-asistencia/lista-asistencia';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from "firebase";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  usuarioActual : any;
  nombreComActual : any;
  perfilActual : any;
  emailActual : any;
  sexoActual : any;
  nombre : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarioActual = JSON.parse(localStorage.getItem("usuario"));
    this.nombre = this.usuarioActual.nombre;
    this.nombreComActual = this.usuarioActual.nombre + " " + this.usuarioActual.apellido;
    this.perfilActual = this.usuarioActual.perfil;
    this.emailActual = this.usuarioActual.email;
    this.sexoActual = this.usuarioActual.sexo;
  }

  logOut()
  {
    firebase.auth().signOut().then(()=> {this.navCtrl.push(LoginPage); localStorage.removeItem("usuario")});
  }

  sabe()
  {
    alert("sabe");
  }

  tomarAsistencia()
  {
    this.navCtrl.push(ListaAsistenciaPage);
  }

  ionViewDidLoad() {
    
  }

}
