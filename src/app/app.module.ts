import { ListaEncuestasPage } from '../pages/lista-encuestas/lista-encuestas';
import { GestorEncuestasPage } from '../pages/gestor-encuestas/gestor-encuestas';
import { EncuestaPage} from '../pages/encuesta/encuesta';
import { RegistroProAdmPage } from '../pages/registro-pro-adm/registro-pro-adm';
import { RegistroAlumnoPage } from '../pages/registro-alumno/registro-alumno';
import { ListaAsistenciaPage } from '../pages/lista-asistencia/lista-asistencia';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import firebase from "firebase";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyA6qeK_0RdSZGbC1xWaQSHzFE1XbwZBnJg",
  authDomain: "testauth-12ddc.firebaseapp.com",
  databaseURL: "https://testauth-12ddc.firebaseio.com",
  projectId: "testauth-12ddc",
  storageBucket: "testauth-12ddc.appspot.com",
  messagingSenderId: "297247795946"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ListaAsistenciaPage,
    RegistroAlumnoPage,
    RegistroProAdmPage,
    GestorEncuestasPage,
    ListaEncuestasPage,
    EncuestaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ListaAsistenciaPage,
    RegistroAlumnoPage,
    RegistroProAdmPage,
    GestorEncuestasPage,
    ListaEncuestasPage,
    EncuestaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
