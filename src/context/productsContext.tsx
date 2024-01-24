import { createContext, useContext, useState } from "react";
import type { Product } from "../types";
import initialProducts from "../assets/products";
import { addNotification } from "../services/notifications";

export interface ProductsContextState {
  products: Product[];
  deleteProduct: (id: string) => void;
  createProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
}

export const ProductsContext = createContext<ProductsContextState>({
  products: [],
  deleteProduct: () => undefined,
  createProduct: () => undefined,
  editProduct: () => undefined,
});

interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    addNotification({
      type: "success",
      title: "Success!",
      message: "Product is successfully deleted!",
    });
  };

  const createProduct = (product: Product) => {
    setProducts([product, ...products]);
    addNotification({
      type: "success",
      title: "Success!",
      message: "Product is successfully created!",
    });
  };

  const editProduct = (product: Product) => {
    const updatedProducts = products.reduce<Product[]>((acc, curr) => {
      if (curr.id === product.id) {
        return [...acc, product];
      }

      return [...acc, curr];
    }, []);

    setProducts(updatedProducts);
    addNotification({
      type: "success",
      title: "Success!",
      message: "Product is successfully updated!",
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products, deleteProduct, editProduct, createProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
