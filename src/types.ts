export interface Manufacturer {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  manufacturer: Manufacturer;
  price: number;
  date: Date;
}
