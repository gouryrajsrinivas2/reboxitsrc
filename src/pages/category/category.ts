import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import { CartPage } from '../carts/cart';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage implements OnInit {
  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public c:CartProvider) {}

    ngOnInit() {
      this.items = this.c.getProducts();
      this.cart = this.c.getCart();
    }
   
    addToCart(product) {
      this.c.addProduct(product);
    }
   
    openCart() {
      this.navCtrl.push(CartPage);
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
