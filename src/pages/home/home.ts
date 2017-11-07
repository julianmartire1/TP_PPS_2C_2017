import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList} from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  perfil : any;
  nombre : any;
  apellido : any;
  sexo : any;
  division : any = "-";
  usuarios : AngularFireList<any>;

  constructor(public navCtrl: NavController, public googleplus : GooglePlus, public afDB : AngularFireDatabase, public params : NavParams) {
    this.usuarios = afDB.list('usuarios');
  }
   
  cancelar()
  {
    this.navCtrl.setRoot(LoginPage);
  }

  completarRegistro()
  {
    if (this.perfil == null || this.nombre == null || this.apellido == null || this.sexo == null || (this.perfil == 'alumno' && this.division == '-'))
    {
      alert("Completa todos los campos");
    } 
    else 
    {
      var usuario : any = {};
      usuario.nombre = this.nombre;
      usuario.apellido = this.apellido;
      usuario.sexo = this.sexo;
      usuario.division = this.division;
      usuario.email = this.params.get("email");
      usuario.token = this.params.get("token");
      this.usuarios.push(usuario);
    }
  }

}
