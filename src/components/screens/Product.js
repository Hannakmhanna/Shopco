import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import tshirtImage from "../../assests/images/Frame 32.jpg";
import jeansImage from "../../assests/images/geens.png";
import shirtImage from "../../assests/images/image 9.png";
import stripedTshirtImage from "../../assests/images/shirtmens.png";
import kids1 from "../../assests/images/Frame 38 (1).png";
import kids2 from "../../assests/images/women tshirt.jpg";
import mens from "../../assests/images/71okzUWbXOL._AC_UL320_.jpg";
import twodress from "../../assests/images/Frame 32 (1).png";
import saree from "../../assests/images/lkqqj_512.webp";
import reddress from "../../assests/images/black.webp";
import mens2 from "../../assests/images/shirtmens.png";
import pink from "../../assests/images/DSC_5531copy.webp";

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

const NewArrivals = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle between more and less products

  const handleViewAllClick = () => {
    setShowMore(!showMore); // Toggle the state when the button is clicked
  };

  const products = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "$120",
      rating: 4.5,
      image: tshirtImage,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: jeansImage,
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "$180",
      rating: 4.5,
      image: shirtImage,
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      originalPrice: "$160",
      discountedPrice: "$130",
      discount: "-30%",
      rating: 4.5,
      image: stripedTshirtImage,
    },
    {
      id: 5,
      name: "Black Striped T-shirt",
      price: "$150",
      rating: 4.2,
      image: kids1,
    },
    {
      id: 6,
      name: "Fabricorn",
      price: "$500",
      rating: 5.0,
      image: kids2,
    },
    {
      id: 7,
      name: "SLEEVE STRIPED T-SHIRT",
      price: "$120",
      rating: 4.4,
      image: mens2,
    },
    {
      id: 8,
      name: "VERTICAL STRIPED SHIRT",
      price: "$150",
      rating: 4.2,
      image: twodress,
    },
    {
      id: 9,
      name: "Women Regular Fit Cotton Blend Saree",
      price: "$1900",
      rating: 5.0,
      image: saree,
    },
    {
      id: 10,
      name: "Men's Classic fit Plain Satin Casual.",
      price: "$920",
      rating: 4.4,
      image: reddress,
    },
    {
      id: 11,
      name: "Leriya Fashion",
      price: "$820",
      rating: 4.4,
      image: mens,
    },
    {
      id: 12,
      name: "Women Anarkali Kurta and Pant Set.",
      price: "$799",
      rating: 4.4,
      image: pink,
    },
  ];

  const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <Wrapper>
      <Heading>NEW ARRIVALS</Heading>
      <ProductsContainer>
        {displayedProducts.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`} // Dynamically generate URL based on product ID
            style={{ textDecoration: "none", color: "inherit" }} // Optional styles to remove link styling
          >
            <ProductCard>
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

      {/* HR Line for "View All" Button
      {showMore && <StyledHr />} */}
    </Wrapper>
  );
};

// const ProductCards = styled(Link)``;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  position: relative;
  background-color: #fff;
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px 0;

  @media (max-width: 980px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 columns for screens up to 980px */
  }

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
  @media (max-width: 360px) {
    width: 100%;
    font-size: 34px;
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

  @media (max-width: 320px) {
    position: absolute;
    left: 4px;
  }
`;

// const StyledHr = styled.hr
//   width: 1240px;
//   max-width: 1664px;
//   border: 1px solid #0000001a;
//   margin: 40px auto;
//   position: relative;
//   left: 100px;
// ;

export default NewArrivals;
