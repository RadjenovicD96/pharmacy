import { Body, Container, Footer, Paragraph } from "./About.styled";

const About = () => {
  return (
    <Container>
      <h1>About application</h1>
      <Body>
        <Paragraph>This application is created by Dusan Radjenovic</Paragraph>
        <Footer>Version 0.1.0</Footer>
      </Body>
    </Container>
  );
};

export default About;
