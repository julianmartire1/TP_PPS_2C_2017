import { AppService } from '../../app/app.service';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController,NavController, NavParams, ModalController} from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from "firebase";
import { Observable } from 'rxjs/Rx';

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

  public usuariosList : AngularFireList<any>;
  public usuariosObs : Observable<any>;
  public usuarios : Array<any>;


  constructor(public afDB: AngularFireDatabase, public navCtrl: NavController,public navParams: NavParams, public googleplus : GooglePlus, public alertCtrl : AlertController, public loadingCtrl : LoadingController, public modalCtrl: ModalController) {
    
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
          
          if (this.verificarSiExiste(ok.uid)) 
          {
            console.log(ok.uid);
            for (var i = 0; i < this.usuarios.length; i++) 
            {
              if (this.usuarios[i].token == ok.uid) 
              {
                var usuario = {token : this.usuarios[i].token, email : this.usuarios[i].email, sexo : this.usuarios[i].sexo, perfil : this.usuarios[i].perfil, nombre : this.usuarios[i].nombre, apellido : this.usuarios[i].apellido};
              }
              
            }
            
            localStorage.setItem("usuario",JSON.stringify(usuario));
            this.navCtrl.setRoot(MenuPage);
            loader.present();  
          } 
          else 
          {
            let profileModal = this.modalCtrl.create(HomePage, { email: ok.email, token : ok.uid });
            profileModal.present();
          }
          
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
    let loader = this.loadingCtrl.create({
      content: "Espere...",
      duration: 2600
      });

    this.googleplus.login({
      'webClientId':'297247795946-v0josakj1113a53jspfo34gdtmvsln6s.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        
        if (this.verificarSiExiste(suc.uid)) 
        {
          console.log(suc.uid);
          for (var i = 0; i < this.usuarios.length; i++) 
          {
            if (this.usuarios[i].token == suc.uid) 
            {
              var usuario = {token : this.usuarios[i].token, email : this.usuarios[i].email, sexo : this.usuarios[i].sexo, perfil : this.usuarios[i].perfil, nombre : this.usuarios[i].nombre, apellido : this.usuarios[i].apellido};
            }
            
          }
          
          localStorage.setItem("usuario",JSON.stringify(usuario));
          this.navCtrl.setRoot(MenuPage);
          loader.present();  
        } 
        else 
        {
          let profileModal = this.modalCtrl.create(HomePage, { email: suc.email, token : suc.uid });
          profileModal.present();
        }

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
    this.usuariosList = this.afDB.list('/usuarios');
    this.usuariosObs = this.usuariosList.valueChanges();
    this.usuariosObs.subscribe(
        user => this.usuarios = user,
      );

    if(localStorage.getItem("usuario") != null)
    {
      this.navCtrl.setRoot(MenuPage);
    }
  }

  verificarSiExiste(token)
  {
    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].token == token)
      {
        return true;
      }
      
    }

    return false;
  }

}
