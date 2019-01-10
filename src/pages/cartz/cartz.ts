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
  ex=[] as any;
  data={id:'',data:''};
  aa='' as string;
  s;
  constructor(public navCtrl: NavController, public navParams: NavParams,public g:GlobalProvider) {
    this.t=this.g.type;
    this.obj=this.g.object;
   //this.spinit=false;
     console.log("oo",this.t);
     console.log("hai",this.obj);
     let db=firebase.firestore();
     if(this.t=="recycler")
     {
       this.s="Aggregators";
     db.collection("aggregator").get().then(querySnapshot=> {
      querySnapshot.forEach(doc=> {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
         // this.ex=doc.data().object;
         let x={
           id:doc.id,data:doc.data()

         }
         //console.log(x)
         this.ex.push(x)
         //this.aa=doc.id;
          //console.log(this.aa)
        });
      });
    }
    else if(this.t=="scrapdealer")
    {
      this.s="User";
      db.collection("user").get().then(querySnapshot=> {
       querySnapshot.forEach(doc=> {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          // this.ex=doc.data().object;
          let x={
            id:doc.id,data:doc.data()
 
          }
          //console.log(x)
          this.ex.push(x)
          //this.aa=doc.id;
           //console.log(this.aa)
         });
       });     
    }
    else {
      this.s="Scrapdealer";
      db.collection("scrapdealer").get().then(querySnapshot=> {
       querySnapshot.forEach(doc=> {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
          // this.ex=doc.data().object;
          let x={
            id:doc.id,data:doc.data()
 
          }
          //console.log(x)
          this.ex.push(x)
          //this.aa=doc.id;
           //console.log(this.aa)
         });
       }); 
    }

      //});
  //});;
     //console.log(this.ex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartzPage');
  }
  fun(){
	  this.navCtrl.push(ListPage)
  }

}
