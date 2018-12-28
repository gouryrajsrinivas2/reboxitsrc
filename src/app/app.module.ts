import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoryPage } from '../pages/category/category';
import { PricePage } from '../pages/price/price';
import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PaperPage } from '../pages/paper/paper';
import { PlasticPage } from '../pages/plastic/plastic';
import { CartPage } from '../pages/carts/cart';
import { CartzPage } from '../pages/cartz/cartz';
import { NotiPage } from '../pages/noti/noti';
import { SlotsPage } from '../pages/slots/slots';
import { AggrePage } from '../pages/aggre/aggre';
import { HistPage } from '../pages/hist/hist';
import { DsheetsPage } from '../pages/dsheets/dsheets';
import { CatePage } from '../pages/cate/cate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GlobalProvider } from '../providers/global/global';
//import { MenuProvider } from '../providers/menu/menu';
import firebase from 'firebase';
import { CartProvider } from '../providers/cart/cart';

  const config = {
    apiKey: "AIzaSyCvyA8nGIUQ0-omDP11SLJq_N3nndF-cbw",
    authDomain: "reboxit-c3fb2.firebaseapp.com",
    databaseURL: "https://reboxit-c3fb2.firebaseio.com",
    projectId: "reboxit-c3fb2",
    storageBucket: "reboxit-c3fb2.appspot.com",
    messagingSenderId: "405707507293"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage,
    LogoutPage,
    PricePage,
    LoginPage,
    SignupPage,
    PaperPage,
    PlasticPage,
    CartPage,CartzPage,
    NotiPage,
    SlotsPage ,
    AggrePage,
    HistPage,
    DsheetsPage,
    CatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoryPage,
    PricePage,
    LogoutPage,
    LoginPage,
    SignupPage,
    PaperPage,
    PlasticPage,
    CartPage,
    CartzPage,
    NotiPage,
    SlotsPage,
    AggrePage,
    HistPage,
    DsheetsPage,
    CatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    CartProvider
    //MenuProvider
  ]
})
export class AppModule {}
