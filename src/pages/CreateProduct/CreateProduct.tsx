import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import { Form, Button } from "./CreateProduct.styled";
import { useProductsContext } from "../../context/productsContext";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types";

interface FormData {
  name: string;
  manufacturer: string;
  price: number;
}

const CreateProduct = () => {
  const navigate = useNavigate();
  const { createProduct } = useProductsContext();

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      manufacturer: "",
      price: 0,
    },
  });

  const handleFormSubmit = (formData: FormData) => {
    const { manufacturer, name, price } = formData;

    const product: Product = {
      id: Math.random().toString(),
      date: new Date(),
      name,
      price,
      manufacturer: {
        id: Math.random().toString(),
        name: manufacturer,
      },
    };

    createProduct(product);
    navigate("/products");
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h1>Create new Product</h1>
      <Input label="Name" {...register("name")} />
      <Input label="Manufacturer" {...register("manufacturer")} />
      <Input label="Price" type="number" {...register("price")} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateProduct;
