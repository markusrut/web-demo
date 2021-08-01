import { bindable } from "aurelia";
import Listing from "../../models/listing";

export class ListingSummary {
  @bindable listing: Listing;
}
