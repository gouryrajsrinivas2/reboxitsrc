import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';


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
import { GlobalProvider } from '../providers/global/global';
import { CartProvider } from '../providers/cart/cart';
import { NotiPage } from '../pages/noti/noti';
import { SlotsPage } from '../pages/slots/slots';
import { AggrePage } from '../pages/aggre/aggre';
import { HistPage } from '../pages/hist/hist';
import { DsheetsPage } from '../pages/dsheets/dsheets';
import { CatePage } from '../pages/cate/cate';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  ass:boolean=false;
  admin:boolean=false;
  us;
  
  //pages: Array<{icon: string,title: string, component: any}>;
    pages: any;
    pages2:any;
    pages3:any;

  // Selected Side Menu
  selectedMenu: any;

  constructor(private fire:AngularFireAuth,private nativeStorage: NativeStorage,public events: Events,public g:GlobalProvider,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public menuCtrl: MenuController) {
    /*this.nativeStorage.getItem('myitem')
  .then(
    //data => console.log(data),
    //error => console.error(error)
    this.rootPage(HomePage)
  );*/
    this.us=this.fire.auth.currentUser;
    if(this.us){
      this.rootPage=HomePage;
    }
    
    this.initializeApp();
    //this.user=this.g.type;
    //console.log("type is", this.g.type)

    this.events.subscribe('created', (tuser) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcomezzz'+ tuser);
      if(tuser=="associates")
      {
      this.ass=true;
      this.pages3=this.pages;
      }
      if(tuser=="admin"){
        this.admin=true;
        this.pages3=this.pages2;
      }
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'person',title: 'Pickups', component: CartzPage },
      { icon: 'calendar',title: 'Alloted Drops', component: LogoutPage },
      { icon:'pricetags',title:'Request Admin', component: PricePage },
         /* {
      icon:'albums',
      title: 'Categories',
      subPages: [{
        title: 'Paper',
        component: PaperPage,
      }, {
        title: 'Plastic',
        component: PlasticPage,
      }]
    },*/
      { icon:'log-out',title:'History', component: PlasticPage },
      { icon:'bookmarks',title:'My sheets', component: PaperPage }

  ];
  this.pages2 = [
    { icon:'person',title: 'Notifications or Requests', component: NotiPage },
    { icon: 'calendar',title: 'Availability of Slots', component: SlotsPage },
    { icon:'pricetags',title:'Categories', component: CatePage },
       /* {
    icon:'albums',
    title: 'Categories',
    subPages: [{
      title: 'Paper',
      component: PaperPage,
    }, {
      title: 'Plastic',
      component: PlasticPage,
    }]
  },*/
    { icon:'log-out',title:'User', component: AggrePage },
    { icon:'log-out',title:'Scrap Dealer', component: AggrePage },
    { icon:'bookmarks',title:'Aggregators', component: AggrePage },
    { icon:'bookmarks',title:'Recycler', component: AggrePage },
    { icon:'bookmarks',title:'History', component: HistPage },
    { icon:'bookmarks',title:'Daily Sheets', component: DsheetsPage }

];
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.getSideMenuData();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

   /* getSideMenuData() {
    this.pages = this.menuProvider.getSideMenus();
  }*/

  /*openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/
    openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }
}
