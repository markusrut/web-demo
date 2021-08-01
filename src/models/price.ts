export default class Price {
  value: number;
  currency: string;

  public get string(): string {
    return this.currency === "USD"
      ? `$${this.value}`
      : `${this.value} ${this.currency}`;
  }

  constructor(value?: number, currency?: string) {
    this.value = value ?? 0;
    this.currency = currency ?? "USD";
  }
}
