import { bindable } from "aurelia";

export class OfferListing {
  @bindable offer: OfferListingModel;
}

export type OfferListingModel = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  owner: string;
};
