import { OfferListingModel } from "../../components/offer-listing/offer-listing";

export class PageOverview {
  offers: OfferListingModel[] = [];

  constructor() {
    this.offers = this.createOffers(40);
  }

  createOffers(count: number): OfferListingModel[] {
    let result = [];
    for (let i = 1; i <= count; i++) {
      result.push({
        id: `${i}`,
        title: `Offer ${i}`,
        description: `Offer ${i} description`,
        price: `$${i}.00`,
        imageUrl: `https://source.unsplash.com/random/300x200?sig=${i}`,
        category: `Category ${i}`,
        owner: `Owner ${i}`,
      });
    }
    return result;
  }
}
