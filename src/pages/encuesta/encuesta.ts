import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  public Items: AngularFireList<any>;
  public items: Observable<any>;
  public Cuestionario: any;
  public Cuestionarios: Array<any>;
  public codigo = this.navParams.get("encuesta");
  public display = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,afDB: AngularFireDatabase) {
    
    this.Items = afDB.list('Encuestas');
    this.items = this.Items.valueChanges();
    this.items.subscribe(
        quest => {for(let i=0;i<quest.length;i++)
          {
            //console.log(quest[i]);
            if(quest[i].Nombre == this.codigo)
            {
              this.Cuestionario = quest[i];
              console.log(this.Cuestionario);
              this.display = true;
              break;
            }
          }}
      );
    /*this.items.subscribe(
        quest => this.Cuestionarios = quest
      );*/
    
  }
  ad()
  { 
    /*for(let i=0;i<this.Cuestionarios.length;i++)
    {
      if(this.Cuestionarios[i].Nombre == this.codigo){
        this.Cuestionario = this.Cuestionarios[i];
      }
    }*/
    console.log(this.Cuestionario);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaPage');
    
  }

}
