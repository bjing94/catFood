import { makeAutoObservable } from "mobx";

export class FoodStore {
  shoppingCart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(itemId) {
    console.log("pushing", itemId);
    this.shoppingCart.push(itemId);
  }
}
