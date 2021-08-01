import { bindable } from "aurelia";
import Price from "../../models/price";

export class InputPrice {
  @bindable price: Price;

  constructor() {
    this.price = new Price();
  }
}
