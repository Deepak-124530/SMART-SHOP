import React from 'react';
import { HomeContainer, Container, CenteredRow, ContentColumn, Heading, Paragraph, PrimaryButton } from "./styledComponents";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../Contact';
import Header from '../Header';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContainer className="home-container">
        <Container>
          <CenteredRow>
            <ContentColumn>
              <Heading>Welcome to Our Hygiene Grocery E-Mart Web App</Heading>
              <Paragraph style={{ color: 'black' }}>
                Discover a wide range of groceries and fresh items for all your needs.
              </Paragraph>
              <Link to='/shopping' style={{ textDecoration: 'none' }}>
                <PrimaryButton>Shop Now</PrimaryButton>
              </Link>
            </ContentColumn>
          </CenteredRow>
        </Container>
      </HomeContainer>
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
