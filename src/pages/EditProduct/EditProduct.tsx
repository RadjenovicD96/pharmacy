import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { Form, Button } from "./EditProduct.styled";
import { useProductsContext } from "../../context/productsContext";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../types";

interface FormData {
  name: string;
  manufacturer: string;
  price: number;
}

interface Params {
  id: string;
  [key: string]: string;
}

const EditProduct = () => {
  const { id = "" } = useParams<Params>();
  const navigate = useNavigate();

  const { products, editProduct } = useProductsContext();

  const productForEdit = products.find((product) => product.id === id);

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: productForEdit?.name,
      manufacturer: productForEdit?.manufacturer.name,
      price: productForEdit?.price,
    },
  });

  const handleFormSubmit = (formData: FormData) => {
    const { manufacturer, name, price } = formData;

    const updatedProduct: Product = {
      id,
      date: productForEdit?.date!,
      name,
      price,
      manufacturer: {
        id: productForEdit?.manufacturer.id!,
        name: manufacturer,
      },
    };

    editProduct(updatedProduct);
    navigate("/products");
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h1>Edit Product</h1>
      <Input label="Name" {...register("name")} />
      <Input label="Manufacturer" {...register("manufacturer")} />
      <Input label="Price" type="number" {...register("price")} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default EditProduct;
