import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CartzPage } from '../cartz/cartz';
import { SignupPage } from '../signup/signup';
import { NotiPage } from '../noti/noti';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import 'firebase/firestore';
import { GlobalProvider } from '../../providers/global/global';
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

	@ViewChild('email') email;
	@ViewChild('password') password;
  @ViewChild('all') all;
  arrDatas=[] as any;
  spinit:boolean;
  temp=[] as any;
  ex=[] as any;
  z=[] as any;
  a;
  
  


  constructor( public events: Events,public g:GlobalProvider,  private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {

             /* this.spinit=false;

      firebase.database().ref('/tuser/user/')
      .once('value',snapshot=>{
        this.arrDatas=[];
        //this.temp=[];
        snapshot.forEach(snap=>{
          this.arrDatas.push({key:snap.key,value:snap.val()});
        })
        this.spinit=true;
      })
      console.log(this.arrDatas);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    navpage(){
       //console.log(this.all.value);
      console.log("hai");
      let db=firebase.firestore();
      this.ex=db.collection(this.all.value).doc(this.email.value);
      console.log("fuck" ,this.email.value),
      //this.a=this.email.value;
      this.ex.get().then((doc)=> {
        if (doc.exists) {
            console.log( doc.data());
             this.z=doc.data();
            console.log(this.z);
            //console.log("fuc",this.email.value);
            if(this.email.value == doc.data().email){
              if(this.password.value==doc.data().password){
                console.log("baby")
                this.g.object=this.z;
                this.g.type=this.all.value;
                console.log("typezzzz",this.g.type)
                if(this.all.value=="user"){
                this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value).then(data=>{
                  this.events.publish('created', this.all.value);
                  this.navCtrl.setRoot(HomePage);
                });
           
               
                //  console.log("rammm");
                  
            
              }
                else if(this.all.value=="scrap-dealer"||this.all.value=="recycler"||this.all.value=="aggregator"){
                  this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value).then(data=>{
                  this.events.publish('created', "associates");
                  this.navCtrl.setRoot(CartzPage);
                });
                }
                else{
                  this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value).then(data=>{
                  this.navCtrl.setRoot(NotiPage);
                  this.events.publish('created', this.all.value);
                });
                }
            
                
              }
              else{
                this.alert("wrong password");
              }
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
   




      /*this.spinit=false;

      firebase.database().ref(`/tuser/${this.all.value}/`)
      .once('value',snapshot=>{
        this.arrDatas=[];
        //this.temp=[];
        snapshot.forEach(snap=>{
          this.arrDatas.push({key:snap.key,value:snap.val()});
        })
        this.spinit=true;
      })
      //console.log(this.arrDatas);
             

      console.log(this.arrDatas);
      for (let item of this.arrDatas) {
        console.log(item.value.email);
        if(item.value.email==this.email.value){
          if(item.value.password==this.password.value){
              this.temp=item;
              this.g.object=this.temp;
              this.g.type=this.all.value;
              this.navCtrl.setRoot(HomePage,this.temp.value);

              console.log(this.temp);

           }
           else{
            this.alert("wrong password");
           }
        }
        else{
          this.alert("email not found");
        }

         

         
          //console.log(temp);

        
      }*/

    	/*this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
    	  	.then(
  		
  		data=>{console.log('loged in',this.fire.auth.currentUser);
  		//this.alert('hey you are logged in');
  		this.navCtrl.setRoot(HomePage);
  	})
  	.catch(error=>{
  		console.log("error",error);
  		this.alert(error.message);
  	
  	});*/
  	
  }

  sample(){
  	this.navCtrl.setRoot(SignupPage)
  }
    alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }

}
