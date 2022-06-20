import { makeAutoObservable } from "mobx";

export class FoodStore {
  shoppingCart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(itemId) {
    this.shoppingCart.push(itemId);
  }
}
