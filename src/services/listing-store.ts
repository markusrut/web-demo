import Listing from "../models/listing";
import { updateDeep } from "./common";

export default class ListingStore {
  listings: Listing[] = [];

  constructor() {
    this.listings = [];
  }

  getListingIndex(id: string): number {
    return this.listings.findIndex((listing) => listing.id === id);
  }

  getListing(id: string): Listing {
    return this.listings[this.getListingIndex(id)];
  }

  saveListing(listing: Listing): void {
    if (this.lisingExists(listing.id)) {
      this.updateListing(listing);
      return;
    }
    this.addListing(listing);
  }

  lisingExists(id: string): boolean {
    return this.getListingIndex(id) > -1;
  }

  private updateListing(listing: Partial<Listing>): void {
    const index = this.getListingIndex(listing.id);
    if (index > -1) {
      updateDeep(this.listings[index], listing);
    }
  }

  private addListing(listing: Listing): void {
    if (this.getListing(listing.id)) return;
    this.listings.push({ ...listing });
  }
}
