import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import useState hook
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import tshirt1 from "../../assests/images/Frame 32 (1).png";
import tshirt2 from "../../assests/images/Frame 33.jpg";
import shirt3 from "../../assests/images/Frame 34.jpg";
import shirt4 from "../../assests/images/Frame 38.jpg";
import baby1 from "../../assests/images/51nUfiMuCLL._AC_UL320_ (1).jpg";
import baby2 from "../../assests/images/51Z0-hX7LjL._AC_UL320_.jpg";
import baby3 from "../../assests/images/51FiUe7mCVL._AC_UL320_.jpg";
import baby4 from "../../assests/images/71MTGIIPX9L._AC_UL320_.jpg";

// StarRating component to display the rating stars
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon icon={faStar} key={`full-${i}`} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#e0e0e0" }}
          key={`empty-${i}`}
        />
      ))}
    </>
  );
};

// Main NewArrivals component
const NewArrivals = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle between more and less products

  const handleViewAllClick = () => {
    setShowMore(!showMore); // Toggle the state when the button is clicked
  };

  const products = [
    {
      id: 21,
      name: "Vertical Stripped Shirt",
      price: "$120",
      rating: 4.5,
      image: tshirt1,
    },
    {
      id: 22,
      name: "Courage Graphic t-shirt",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: tshirt2,
    },
    {
      id: 23,
      name: "Loose Fit Bermuda Shorts",
      price: "$180",
      rating: 4.5,
      image: shirt3,
    },
    {
      id: 24,
      name: "Faded Skinny Jeans",
      originalPrice: "$160",
      discountedPrice: "$130",
      discount: "-30%",
      rating: 4.5,
      image: shirt4,
    },
    {
      id: 17,
      name: "Boys Cotton Full Sleeves Printed Sweatshirt and Pant Set",
      price: "$500",
      rating: 5.0,
      image: baby1,
    },
    {
      id: 18,
      name: "Violet Ocean Net Flair Baby Frock for Kids Girl",
      price: "$120",
      rating: 4.4,
      image: baby2,
    },
    {
      id: 19,
      name: "Embroidery Sequence Baby Frock for Kid Girls",
      price: "$120",
      rating: 4.4,
      image: baby3,
    },
    {
      id: 20,
      name: "Adorable Floral Girls dress with Heart-shaped purse",
      price: "$120",
      rating: 4.4,
      image: baby4,
    },
    // More products can be added here as needed
  ];

  // If showMore is true, display all products, otherwise show only the first 4 products
  const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <Wrapper>
      {/* Horizontal Line */}
      <StyledHr />
      <Heading>TOP SELLING</Heading>
      <ProductsContainer>
        {displayedProducts.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`} // Dynamically generate URL based on product ID
            style={{ textDecoration: "none", color: "inherit" }} // Optional styles to remove link styling
          >
            <ProductCard key={index}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <RatingContainer>
                <StarRating rating={product.rating} />
                <RatingNumber>{product.rating}/5</RatingNumber>
              </RatingContainer>
              <PriceContainer>
                {product.discountedPrice ? (
                  <>
                    <DiscountedPrice>{product.discountedPrice}</DiscountedPrice>
                    <OriginalPrice>{product.originalPrice}</OriginalPrice>
                    <DiscountBadge>{product.discount}</DiscountBadge>
                  </>
                ) : (
                  <DiscountedPrice>{product.price}</DiscountedPrice>
                )}
              </PriceContainer>
            </ProductCard>
          </Link>
        ))}
      </ProductsContainer>
      <ViewAllButton onClick={handleViewAllClick}>
        {showMore ? "View Less" : "View All"}
      </ViewAllButton>
    </Wrapper>
  );
};

// Styled Components for layout and design
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  position: relative;
`;
const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #0000001a; /* Adds a top border with a color */
  margin: 99px 0; /* Adds margin on top and bottom */
  width: 80%; /* Adjusts width of the line */
  margin-left: auto;
  margin-right: auto;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px 0;

  @media (max-width: 760px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 columns for screens up to 768px */
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductCard = styled.div`
  text-align: left;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 10px 0 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #f5c518;
  margin-bottom: 5px;
`;

const RatingNumber = styled.span`
  font-size: 14px;
  color: #888;
  margin-left: 5px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OriginalPrice = styled.span`
  font-size: 24px;
  color: #00000066;
  text-decoration: line-through;
  font-weight: 700;
`;

const DiscountedPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const DiscountBadge = styled.span`
  background-color: #ffedea;
  color: #ff5252;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 5px;
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;


   @media (max-width:320px){
   font-size:37px;
   width:100%;
   }
`;

const ViewAllButton = styled.button`
  width: 218px;
  height: 52px;
  border-radius: 62px;
  border: 1px solid #0000001a;
  padding-top: 16px;
  padding-right: 54px;
  padding-bottom: 16px;
  padding-left: 54px;
  gap: 12px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  position: absolute;
  left: 413px;

  // &:hover {
  //   background-color: rgba(0, 0, 0, 0.1);
  // }

  &:focus {
    outline: none;
  }

  @media (max-width: 980px) {
    width: 180px;
    height: 48px;
    font-size: 14px;
    position: absolute;
    left: 351px;
  }

  @media (max-width: 760px) {
    position: absolute;
    left: 183px;
  }

  @media (max-width: 480px) {
    width: 280px;
    position: absolute;
    left: 66px;
  }

  @media (max-width: 360px) {
    position: absolute;
    left: 17px;
  }
      @media (max-width: 320px){
      position:absolute;
      left: 3px;
      } 
`;

export default NewArrivals;
