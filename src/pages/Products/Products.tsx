import products from "../../assets/products";
import {
  Card,
  Body,
  Container,
  ProductImage,
  MainRow,
  ButtonsContainer,
  ButtonImage,
} from "./Products.styled";
import Header from "./Header/Header";

const Products = () => {
  return (
    <>
      <Header />
      <Container>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <ProductImage
                src="https://imgs.search.brave.com/wHbX0x378x6zdoibyEi7_pOOUBMC0snz4DxWzE55t7A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIz/MTc0ODE4L3ZlY3Rv/ci9tZWRpY2FsLWlj/b24tbWluaW1hbC1m/bGF0LWJsdWUtY2Fk/dWNldXMtc3ltYm9s/LW9uLXdoaXRlLWJh/Y2tncm8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPThrb28y/QTBSTGZ5aHRubXpM/NWpocTJ4eW9qNzRm/TE5rM1JJQmx0ZmhL/UjQ9"
                alt="product-image"
              />
              <Body>
                <h4>
                  <MainRow>
                    <b>{product.name}</b>
                    <ButtonsContainer>
                      <ButtonImage
                        alt="Edit"
                        src="https://imgs.search.brave.com/SH88OgM22nxvGq9hllXJ2FADWc19jBun7fyc4w8H1wk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzEy/OC80Mjc3LzQyNzcx/MzIucG5n"
                      />
                      <ButtonImage
                        alt="Delete"
                        src="https://imgs.search.brave.com/c-DiC5n6qSmYJVXKTKtUJZo9QMdKiZa5MssWNZOAAMU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC90cmFzaC1p/Y29uLTQ2Mng1MTIt/bmp2ZXk1bmYucG5n"
                      />
                    </ButtonsContainer>
                  </MainRow>
                </h4>
                <p>Manufacturer: {product.manufacturer.name}</p>
                <p>Price: {product.price} Euros</p>
                <p>Expiry date: {product.date.toDateString()}</p>
              </Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Products;
