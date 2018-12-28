import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { GlobalProvider } from '../../providers/global/global';
import { ListPage } from '../list/list';
/**
 * Generated class for the CartzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartz',
  templateUrl: 'cartz.html',
})
export class CartzPage {
  t;
  obj=[] as any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public g:GlobalProvider) {
    this.t=this.g.type;
    this.obj=this.g.object;
   //this.spinit=false;
     //console.log(this.t);
     console.log("hai",this.obj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartzPage');
  }
  fun(){
	  this.navCtrl.push(ListPage)
  }

}
