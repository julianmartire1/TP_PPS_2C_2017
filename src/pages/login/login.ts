import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController,NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from "firebase";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string;
  password : string;

  constructor(public navCtrl: NavController,public navParams: NavParams, public googleplus : GooglePlus, public alertCtrl : AlertController, public loadingCtrl : LoadingController) {
    
  }
  
/*
  registroPrompt() 
  {
    const alert = this.alertCtrl.create({
      title: 'Login',
      cssClass: '',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
        {
          name: 'confirmPassword',
          placeholder: 'Confirmar password',
          type: 'password'
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Registrarme',
          handler: data => {
              firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then(()=>{
                console.log("registrado");
              })
              .catch(error=>{console.log(error)});
          }
        }
      ]
    });
    alert.present();
  }
*/

  loginComun()
  {
      let loader = this.loadingCtrl.create({
      content: "Espere...",
      duration: 2600
      });
      
  
      if(this.email == null || this.password == null)
      {
          let alert = this.alertCtrl.create({
          title: 'ADVERTENCIA!',
          subTitle: 'Debe completar todos los campos!',
          buttons: ['OK']
          });
          alert.present();
      }
      else
      {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(ok => {
          
          this.navCtrl.setRoot(MenuPage);
          loader.present();       
          },
          error => {
          let alert = this.alertCtrl.create({
          title: 'ERROR!',
          subTitle: 'Usuario y/o contraseña incorrectas!',
          buttons: ['OK']
          });
          alert.present();        
          }
          );
      }
  }
    
  loginGoogle()
  {
    this.googleplus.login({
      'webClientId':'297247795946-v0josakj1113a53jspfo34gdtmvsln6s.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        this.navCtrl.setRoot(MenuPage);
      })
      .catch(notSuc=>{
        let alertDos = this.alertCtrl.create({
          title: 'ERROR!',
          subTitle: 'Hubo un error al inciar sesión, por favor intente nuevamente',
          buttons: ['Aceptar']
        });
        alertDos.present();
      })
    })
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Espere...",
      duration: 2600
      });

    loader.present().then(()=> {console.log(firebase.auth().currentUser);
      if (firebase.auth().currentUser != null) 
      {
        this.navCtrl.setRoot(MenuPage);  
      }
    });
  }

}
