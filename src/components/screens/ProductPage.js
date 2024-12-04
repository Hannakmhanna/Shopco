import React from "react";
import styled from "styled-components";
import skyblue from "../../assests/images/Frame 32 (2).png";
import skyblue2 from "../../assests/images/Frame 33 (1).png";
import skyblue3 from "../../assests/images/Frame 34.png";
import skyblue4 from "../../assests/images/Frame 38 (1).png";
import star1 from "../../assests/images/4star.png";
import star2 from "../../assests/images/3halfstar.png";
import star3 from "../../assests/images/Frame 10 (4).png";
import star4 from "../../assests/images/Frame 10.png";
import mailIcon from "../../assests/images/message.png";

// Styled Components

// Product Card Component
const ProductCardComponent = ({
  name,
  image,
  price,
  oldPrice,
  discount,
  star,
  ratings,
}) => {
  return (
    <ProductCard>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Stars>
        <img src={star} alt="Star Rating" />
        {ratings && <ProductRatings>{ratings}</ProductRatings>}
      </Stars>
      <Price>
        <span>${price}</span>
        {oldPrice && <span className="discounted">${oldPrice}</span>}
        {discount && <span className="discount">-{discount}%</span>}
      </Price>
    </ProductCard>
  );
};

// Main Component
const YouMightAlsoLike = () => {
  const products = [
    {
      name: "Polo with Contrast Trims",
      image: skyblue,
      price: 212,
      oldPrice: 242,
      discount: 20,
      star: star1,
      ratings: "4.5/5",
    },
    {
      name: "Gradient Graphic T-shirt",
      image: skyblue2,
      price: 145,
      star: star2,
      ratings: "3.5/5",
    },
    {
      name: "Polo with Tipping Details",
      image: skyblue3,
      price: 180,
      star: star3,
      ratings: "4.0/5",
    },
    {
      name: "Black Striped T-shirt",
      image: skyblue4,
      price: 120,
      oldPrice: 160,
      discount: 30,
      star: star4,
      ratings: "5.0/5",
    },
  ];

  return (
    <Wrapper>
      <Section>
        <Title>You Might Also Like</Title>
        <ProductList>
          {products.map((product, index) => (
            <ProductCardComponent key={index} {...product} />
          ))}
        </ProductList>
      </Section>
      <FormWrapper>
        <FormLeft>
          <h4>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h4>
        </FormLeft>
        <FormRight>
          <Form>
            <InputContainer>
              <img src={mailIcon} alt="mail" />
              <Input type="email" placeholder="Enter your email address" />
            </InputContainer>
          </Form>
          <Button>Subscribe to Newsletter</Button>
        </FormRight>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 146px 20px;
  position: relative;

    @media (max-width:640px){
    padding:20px 0 240px 20px;
    }
`;
const Section = styled.div`
  margin: 20px 0;

  @media (max-width: 980px) {
    margin: 20px 0 120px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 760px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const ProductCard = styled.div`
  width: 24%;
  border: none;
  border-radius: 20px;

  @media (max-width: 760px) {
    width: 31%;
  }
  @media (max-width: 640px) {
    width: 48%;
  }
     @media (max-width:480px){
     width:100%;
     }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Name = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 700;
  color: #000000;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;

  img {
    width: 31.4%;
  }
`;

const ProductRatings = styled.span`
  font-size: 14px;
  color: #666;
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  margin: 10px 0;

  span {
   font-size: 24px;
    font-weight: 700;

  }

  .discounted {
    text-decoration: line-through;
    color: #999;
  }

  .discount {
    color: red;
    font-size: 12px;
    border-radius: 62px;
    background-color: #FF33331A;
    padding: 6px 14px 6px 14px;
}
  }
`;

const FormWrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 36px 64px;
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  position: absolute;
  bottom: -79px;
`;

const FormLeft = styled.div`
  flex: 1;
  h4 {
    font-size: 41px;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }
`;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fff;
  border-radius: 62px;
  padding: 12px 16px;
  width: 350px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  color: #000;
  width: 100%;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 62px;
  padding: 12px 30px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  width: 350px;

  &:hover {
    background-color: #e0e0e0;
  }
`;
 

export default YouMightAlsoLike;
