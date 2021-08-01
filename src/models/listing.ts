import Price from "./price";

export default class Listing {
  id: string;
  title: string;
  description: string;
  price: Price;
  category: string;
  imageUrl: string;
  owner: string;

  constructor(
    id?: string,
    title?: string,
    description?: string,
    price?: Price,
    category?: string
  ) {
    id = id || generateGuid();

    this.id = id;
    this.title = title ?? "";
    this.description = description ?? "";
    this.price = price ?? new Price(Math.floor(Math.random() * 100));
    this.category = category ?? "";
    this.imageUrl = `https://source.unsplash.com/random/300x200?sig=${id}`;
    this.owner = `Owner ${id}`;
  }
}

const generateGuid = (): string => {
  var d = new Date().getTime();
  var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return guid;
};
