import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// React Component
const DressStyleGrid = () => {
  return (
    <Wrapper>
      <Container>
        <Title>BROWSE BY DRESS STYLE</Title>
        <Grid>
          <Link to="/CategoryDetails">
            <Card>
              <Image
                src={require("../../assests/images/casual.png")}
                alt="Casual"
              />
            </Card>
          </Link>
          <Link to="/CategoryFormal">
            <Card>
              <Image
                src={require("../../assests/images/formal.png")}
                alt="Formal"
              />
            </Card>
          </Link>
          <Link to="/CategoryParty">
            <Card>
              <Image
                src={require("../../assests/images/party.png")}
                alt="Party"
              />
            </Card>
          </Link>
          <Link to="/CategoryGynm">
            <Card>
              <Image src={require("../../assests/images/gym.png")} alt="Gym" />
            </Card>
          </Link>
        </Grid>
      </Container>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #f5f5f5;
  border-radius: 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 70%;
  margin-top: 102px;
  @media (max-width: 640px) {
    padding: 4px 0;
  }
`;

const Container = styled.div`
  padding: 50px;
  border-radius: 10px;

  @media (max-width: 320px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 46px;
  text-align: center;
  color: #000000;
  @media (max-width: 760px) {
    width: 83%;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 107%;
    font-size: 29px;
  }

  @media (max-width: 360px) {
    width: 124%;
  }
  @media (max-width: 320px) {
    width: 179%;
    margin: 21px -31px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns by default */
  gap: 25px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column for small screens */
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%; /* Ensure images scale correctly */
  height: 162px;
  border-radius: 10px;
  transition: transform 0.3s ease;

  @media (max-width: 640px) {
    width: 109%;
  }
  @media (max-width: 320px) {
    width: 186%;
    margin: 0 -46px;
  }
`;

export default DressStyleGrid;
