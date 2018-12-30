import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import firebase from 'firebase';
import 'firebase/firestore';
import { NativeStorage } from '@ionic-native/native-storage';
//import { AngularFirestore } from '@angular/fire/firestore';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  pet;
  userDoc;
  data={cat:'',email:'',username:'',password:'',cpassword:'',uid:''};
  zz;
	//ref = firebase.database().ref('/users/');

	//users

  constructor(private nativeStorage: NativeStorage,private fire:AngularFireAuth, public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
    sign() {
      console.log(this.pet)
    	 /*console.log(this.data.name);
    	 const ref1 = firebase.database().ref(`/tuser/${this.data.users}`);
        ref1.push({
       name:this.data.name,email:this.data.email,username:this.data.username,password:this.data.password,phonenum:this.data.phonenum
      //name:this.data.name
    });*/
    if(this.pet=="user"){
    this.fire.auth.createUserWithEmailAndPassword(this.data.email,this.data.password).then(dat=>{
      //this.zz=this.fire.auth.currentUser;
      console.log("oww",dat)
            let db=firebase.firestore();
      db.collection(this.pet).doc(this.data.email).set({
        
        email:this.data.email,username:this.data.username,password:this.data.password,cpassword:this.data.cpassword,uid:dat.user.uid
    
        
      })
      console.log("uid is ",dat.additionalUserInfo.providerId);
    })
     /* this.nativeStorage.setItem('myitem', {property: 'value'}).then((data)=>{
        console.log('Stored item!'),
        this.alert('You are Sucessfully signed up');
      })
      .catch((error)=>{
        
      

   // })*/
    .catch(error=>{
      this.alert(error.message);
    });
   
  }else{
    this.fire.auth.createUserWithEmailAndPassword(this.data.email,this.data.password).then(data=>{
    let db=firebase.firestore();
    db.collection(this.data.cat).doc(this.data.email).set({
      email:this.data.email,username:this.data.username,password:this.data.password,cpassword:this.data.cpassword
    })
   /* this.nativeStorage.setItem('myitem', {property: 'value'}).then(data=>{
      console.log('Stored item!'),
      this.alert('You are Sucessfully signed up');
    })
    .catch(error=>{
      console.log(error.data);
    })*/
    //this.alert('You are Sucessfully signed up');
  })
 .catch(error=>{
    this.alert(error.message);
  });
  }
  this.navCtrl.setRoot(LoginPage);
    /*this.userDoc = this.fireStore.doc<any>('userProfile/we45tfgy8ij');
    this.userDoc.set({
      name: 'Jorge Vergara',
      email: 'j@javebratt.com',
      // Other info you want to add here
    })*/
       // this.fire.auth.createUserWithEmailAndPassword(this.data.email,this.data.password);
      
    	

    /*const alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'Your are succesfully registered',
      buttons: ['OK']
    });
    alert.present();*/
  }
  alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
 }
  goback(){
  	this.navCtrl.setRoot(LoginPage)
  }

}
