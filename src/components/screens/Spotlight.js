import React from "react";
import styled from "styled-components";
import SampleImage from "../../assests/images/Rectangle 2.png";
import vector from "../../assests/images/Vector (5).png";
import vector2 from "../../assests/images/Vector (6).png";
import { Link } from "react-router-dom";

const SpotLight = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContent>
          <Title>FIND CLOTHES THAT MATCHES YOUR STYLE</Title>
          <Subtitle>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Subtitle>
          <Link to="/CategoryDetails">
            <Button>Shop Now</Button>
          </Link>

          <StatsContainer>
            <StatBox>
              <StatNumber>200+</StatNumber>
              <StatText>International Brands</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>2,000+</StatNumber>
              <StatText>High-Quality Products</StatText>
            </StatBox>
            <StatBox>
              <StatNumber>30,000+</StatNumber>
              <StatText>Happy Customers</StatText>
            </StatBox>
          </StatsContainer>
        </LeftContent>

        {/* Right Image Section */}
        <RightImage>
          <Vector src={vector} alt="vector" />
          <MainImage src={SampleImage} alt="main" />
          <Vector2 src={vector2} alt="vector2" />
        </RightImage>
      </Container>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f0f1;
  padding: 20px; /* Adds padding for smaller screens */
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    text-align: center;
    gap: 20px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on mobile */
    padding-right: 0;
  }
`;

const RightImage = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Vector = styled.img`
  position: absolute;
  bottom: 48%;
  right: 85%;
  width: 80px;
  height: auto;
  z-index: 3;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const MainImage = styled.img`
  width: 458px;
  height: 718px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    height: auto; /* Maintain aspect ratio */
  }
`;

const Vector2 = styled.img`
  position: absolute;
  top: 7%;
  left: 75%;
  width: 100px;
  height: auto;
  z-index: 2;

  @media (max-width: 768px) {
    width: 80px;
    left: 70%; /* Adjust position for smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 59px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 980px) {
    width: 118%;
  }

  @media (max-width: 768px) {
    font-size: 40px; /* Adjust font size for mobile */
  }
  @media (max-width: 640px) {
    width: 98%;
  }

  @media (max-width: 480px) {
    font-size: 41px; /* Further reduce on smaller screens */
  }
  @media (max-width: 360px) {
    width: 111%;
    text-align: left;
  }

  @media (max-width: 320px) {
    width: 114%;
    text-align: left;
    line-height: 36px;
    font-size: 36px;
    font-weight: 700;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 40px;
  width: 92%;

  @media (max-width: 768px) {
    font-size: 14px; /* Smaller text on mobile */
  }

  @media (max-width: 640px) {
    font-size: 18px; /* Smaller text on mobile */
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 360px) {
    text-align: left;
  }
`;

const Button = styled.button`
  padding: 16px 54px;
  background-color: #000000;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 62px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px 30px; /* Adjust padding on mobile */
    font-size: 14px; /* Smaller text on mobile */
  }
  @media (max-width: 640px) {
    padding: 23px 48px;
    font-size: 20px;
  }
  @media (max-width: 480px) {
    padding: 27px 150px;
  }

  @media (max-width: 360px) {
    padding: 16px 82px;
  }
  @media (max-width: 320px) {
    padding: 17px 71px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    width: 94%;
    text-align: left;
    justify-content: center;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 26px;
    width: 110%;
  }
  @media (max-width: 360px) {
    gap: 10px;
    width: 117%;
    margin: 23px -14px;
  }
  @media (max-width: 320px) {
    gap: 12px;
  }
`;

const StatBox = styled.div`
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 166px;
    top: 21%;
    height: 47%;
    width: 1px;
    background-color: #0000001a;
  }

  &:first-child::before {
    display: none;
  }

  @media (max-width: 768px) {
    &::before {
      content: "";
      position: absolute;
      right: 200px;
      top: 9%;
      height: 51%;
      width: 1px;
      background-color: #0000001a;
    }
      @media (max-width: 320px){
       &::before{
       content: "";
        position: absolute;
        right: 144px;
        top: 6%;
       }
}

            
  }
`;

const StatNumber = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: -12px;

  @media (max-width: 768px) {
    font-size: 30px; /* Smaller number on mobile */
  }
  @media (max-width: 640px) {
    font-size: 38px;
    text-align: left;
  }
  @media (max-width: 480px) {
    font-size: 39px;
    text-align: left;
  }
  @media (max-width: 360px) {
    font-size: 27px;
  }
`;

const StatText = styled.p`
  font-size: 16px;
  color: #777;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 14px; /* Smaller text on mobile */
  }

  @media (max-width: 640px) {
    font-size: 18px;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
  @media (max-width: 360px) {
    font-size: 17px;
  }
     @media (max-width: 320px){
     font-size:13px;
     }
`;

export default SpotLight;
