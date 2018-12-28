import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {

  private data = [
    {
      category: 'Paper',
      expanded: true,
      products: [
        { id: 0, name: 'white-paper', price: '8' },
        { id: 1, name: 'brown-paper', price: '5' },

      ]
    },
    {
      category: 'Plastic',
      products: [
        { id: 4, name: 'soft-plastic', price: '8' },
        { id: 5, name: 'Hard-plastic', price: '6' }
      ]
    },
    {
      category: 'CartBoard',
      products: [
        { id: 6, name: 'golden-cartboard', price: '8' },
        { id: 7, name: 'Black-cartboard', price: '5' },
        { id: 8, name: 'white-cartboard', price: '9' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

}
