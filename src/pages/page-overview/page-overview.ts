import Listing from "../../models/listing";
import ListingStore from "../../services/listing-store";

export class PageOverview {
  selectedListing: Listing;

  public get listings(): Listing[] {
    return this._store.listings;
  }

  constructor(private readonly _store: ListingStore) {}

  newListing(): void {
    this.selectedListing = new Listing();
  }
}
