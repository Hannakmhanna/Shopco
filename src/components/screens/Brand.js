import React from "react";
import styled from "styled-components";
import versa from "../../assests/images/versa.png";
import zara from "../../assests/images/zara-logo-1 1.png";
import gucci from "../../assests/images/gucci-logo-1 1.png";
import pranda from "../../assests/images/prada-logo-1 1.png";
import calvinkelin from "../../assests/images/Group (1).png";

const Brand = () => {
  return (
    <Wrapper>
      <BrandContainer>
        <BrandImage src={versa} alt="brandversa" />
        <BrandImage src={zara} alt="brandzara" />
        <BrandImage src={gucci} alt="brandgucci" />
        <BrandImage src={pranda} alt="brandprada" />
        <BrandImage src={calvinkelin} alt="brandcalvinklin" />
      </BrandContainer>
    </Wrapper>
  );
};

export default Brand;

// Styled-components
const Wrapper = styled.div`
  width: 100%;
  background-color: #000; /* Black background color */
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 91%;
  flex-wrap: wrap;

  @media (max-width: 760px) {
    width: 113%;
    justify-content: center;
    gap: 26px;
  }
`;

const BrandImage = styled.img`
  height: auto;
  cursor: pointer;
`;
