import type { Product } from "../types";

const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 200,
    date: new Date(),
    manufacturer: {
      id: "11",
      name: "Manufacturer 1",
    },
  },
  {
    id: "2",
    name: "Product 2",
    price: 100,
    date: new Date(),
    manufacturer: {
      id: "12",
      name: "Manufacturer 2",
    },
  },
  {
    id: "3",
    name: "Product 3",
    price: 300,
    date: new Date(),
    manufacturer: {
      id: "11",
      name: "Manufacturer 1",
    },
  },
  {
    id: "4",
    name: "Product 4",
    price: 230,
    date: new Date(),
    manufacturer: {
      id: "11",
      name: "Manufacturer 1",
    },
  },
  {
    id: "5",
    name: "Product 5",
    price: 943,
    date: new Date(),
    manufacturer: {
      id: "12",
      name: "Manufacturer 2",
    },
  },
  {
    id: "6",
    name: "Product 6",
    price: 99,
    date: new Date(),
    manufacturer: {
      id: "11",
      name: "Manufacturer 1",
    },
  },
  {
    id: "7",
    name: "Product 7",
    price: 10,
    date: new Date(),
    manufacturer: {
      id: "13",
      name: "Manufacturer 3",
    },
  },
  {
    id: "8",
    name: "Product 8",
    price: 20,
    date: new Date(),
    manufacturer: {
      id: "12",
      name: "Manufacturer 2",
    },
  },
];

export default products;
