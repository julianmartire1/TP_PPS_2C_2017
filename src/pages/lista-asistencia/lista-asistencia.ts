import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaAsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-asistencia',
  templateUrl: 'lista-asistencia.html',
})
export class ListaAsistenciaPage {

  opFiltrado : string;
  filtradoHecho : boolean = false;
  opcionSeleccionada : any;
  tablaFiltrado : boolean = true;

  alumnos : any[] = [{alumno: "Juan Martín Pollio", legajo: 104321, asistio: false}
                    ,{alumno: "Rodrigo Balabasquer", legajo: 104320, asistio: true}
                    ,{alumno: "Julián Martire", legajo: 104319, asistio: false}
                    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  filtrado(opcion : string)
  {
    this.opFiltrado = opcion;
  }

  buscarAsistencia()
  {
    this.filtradoHecho = true;
    this.tablaFiltrado = false;
    alert(this.opcionSeleccionada);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaAsistenciaPage');
  }

}
