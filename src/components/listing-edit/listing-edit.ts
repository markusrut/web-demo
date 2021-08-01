import { bindable } from "aurelia";
import Listing from "../../models/listing";
import ListingStore from "../../services/listing-store";

export class ListingEdit {
  @bindable listing: Listing;

  get existsInStore(): boolean {
    return this._store.lisingExists(this.listing.id);
  }

  private _sameAsStore = false;
  get sameAsStore(): boolean {
    this._sameAsStore = this.isChanged(this.listing);
    return this._sameAsStore;
  }
  set sameAsStore(value: boolean) {
    this._sameAsStore = value;
  }

  constructor(private readonly _store: ListingStore) {
    this.listing = new Listing();
  }

  save() {
    this._store.saveListing(this.listing);
    this.sameAsStore = true;
  }

  private isChanged(listing: Listing): boolean {
    const json = JSON.stringify(listing);
    const storeJson = JSON.stringify({
      ...this._store.getListing(listing.id),
    });

    return json === storeJson;
  }
}
