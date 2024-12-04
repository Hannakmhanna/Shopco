import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import star from "../../assests/images/star5.png";
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
import tshirt1 from "../../assests/images/Frame 32 (1).png";
import tshirt2 from "../../assests/images/Frame 33.jpg";
import shirt3 from "../../assests/images/Frame 34.jpg";
import shirt4 from "../../assests/images/Frame 38.jpg";
import baby1 from "../../assests/images/51nUfiMuCLL._AC_UL320_ (1).jpg";
import baby2 from "../../assests/images/51Z0-hX7LjL._AC_UL320_.jpg";
import baby3 from "../../assests/images/51FiUe7mCVL._AC_UL320_.jpg";
import baby4 from "../../assests/images/71MTGIIPX9L._AC_UL320_.jpg";

const DetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState(null);

  const navigate = useNavigate();

  const colors = ["#4B4B33", "#2C5F56", "#2D2C59"];
  const products = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "$120",
      rating: 4.5,
      image: tshirtImage,
      Description:
        "A stylish men's oversized t-shirt featuring unique tape detailing on the sides. Designed with a round neck, drop shoulders, and a loose fit for ultimate comfort and fashion-forward appeal.",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: jeansImage,
      Description:
        "These skinny fit jeans offer a sleek and modern look, crafted from high-quality denim for a comfortable, form-fitting style. Perfect for casual outings or a smart-casual ensemble.",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "$180",
      rating: 4.5,
      image: shirtImage,
      Description:
        "A classic checkered shirt that pairs well with almost anything. Made from soft fabric for comfort, it features a stylish button-down design and a relaxed fit.",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      originalPrice: "$160",
      discountedPrice: "$130",
      discount: "-30%",
      rating: 4.5,
      image: stripedTshirtImage,
      Description:
        "This t-shirt features bold striped sleeves, offering a modern twist on a classic design. Made from soft cotton fabric, it's perfect for both casual days and dressed-down events.",
    },
    {
      id: 5,
      name: "Black Striped T-shirt",
      price: "$150",
      rating: 4.2,
      image: kids1,
      Description:
        "A trendy black t-shirt with eye-catching stripes across the chest. Its comfortable fabric and casual design make it a great addition to any laid-back wardrobe.",
    },
    {
      id: 6,
      name: "Fabricorn",
      price: "$500",
      rating: 5.0,
      image: kids2,
      Description:
        "A whimsical and unique t-shirt design featuring an enchanting 'Fabricorn' print. Made for fashion lovers who enjoy fun, imaginative designs in high-quality fabric.",
    },
    {
      id: 7,
      name: "SLEEVE STRIPED T-SHIRT",
      price: "$120",
      rating: 4.4,
      image: mens2,
      Description:
        "A modern striped t-shirt with contrasting sleeve patterns. Soft, breathable, and perfect for a relaxed yet stylish look.",
    },
    {
      id: 8,
      name: "VERTICAL STRIPED SHIRT",
      price: "$150",
      rating: 4.2,
      image: twodress,
      Description:
        "A sleek shirt with vertical stripes, designed to add a touch of elegance to your wardrobe. Perfect for both work and casual events, providing a timeless and sophisticated look.",
    },
    {
      id: 9,
      name: "Women Regular Fit Cotton Blend Saree",
      price: "$1900",
      rating: 5.0,
      image: saree,
      Description:
        "A stunning cotton blend saree that combines traditional style with a comfortable fit. Perfect for formal occasions or cultural events, this saree offers both elegance and ease.",
    },
    {
      id: 10,
      name: "Men's Classic fit Plain Satin Casual.",
      price: "$920",
      rating: 4.4,
      image: reddress,
      Description:
        "A classic satin shirt with a plain design, ideal for a refined, casual look. Its smooth texture adds a touch of sophistication to everyday wear.",
    },
    {
      id: 11,
      name: "Leriya Fashion",
      price: "$820",
      rating: 4.4,
      image: mens,
      Description:
        "A stylish and versatile fashion piece that blends contemporary trends with traditional elegance. Perfect for both casual and formal occasions.",
    },
    {
      id: 12,
      name: "Women Anarkali Kurta and Pant.",
      price: "$799",
      rating: 4.4,
      image: pink,
      Description:
        "A beautiful Anarkali kurta and pant set, featuring delicate embroidery and a matching dupatta. This set combines comfort with cultural elegance, perfect for festive occasions.",
    },
    {
      id: 13,
      name: "Vertical Stripped Shirt",
      price: "$120",
      rating: 4.5,
      image: tshirtImage,
      Description:
        "A chic vertical striped shirt that combines sophistication with style. Ideal for both formal and semi-casual looks, made with soft fabric for all-day comfort.",
    },
    {
      id: 14,
      name: "Courage Graphic T-shirt",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: jeansImage,
      Description:
        "A bold graphic t-shirt featuring a motivational 'Courage' print. This t-shirt offers comfort and style with a message that inspires confidence.",
    },
    {
      id: 15,
      name: "Loose Fit Bermuda Shorts",
      price: "$180",
      rating: 4.5,
      image: shirtImage,
      Description:
        "Casual and comfortable Bermuda shorts with a loose fit, perfect for warmer weather. These shorts combine a relaxed style with the ease of breathable fabric.",
    },
    {
      id: 16,
      name: "Faded Skinny Jeans",
      originalPrice: "$160",
      discountedPrice: "$130",
      discount: "-30%",
      rating: 4.5,
      image: stripedTshirtImage,
      Description:
        "These skinny jeans come in a faded wash, offering a vintage feel while still maintaining a modern, sleek fit. A versatile piece for day-to-night styling.",
    },
    {
      id: 17,
      name: "Boys Cotton Full Sleeves Printed Sweatshirt and Pant Set",
      price: "$500",
      rating: 5.0,
      image: baby1,
      Description:
        "A cozy cotton sweatshirt with printed designs, paired with matching pants. Ideal for boys who love comfort and style in their casual wear.",
    },
    {
      id: 18,
      name: "Violet Ocean Net Flair Baby Frock",
      price: "$120",
      rating: 4.4,
      image: baby2,
      Description:
        "A delicate and adorable violet-colored baby frock featuring a netted flair. Perfect for special occasions or everyday wear, offering comfort and style.",
    },
    {
      id: 19,
      name: "Embroidery Sequence Baby Frock",
      price: "$120",
      rating: 4.4,
      image: baby3,
      Description:
        "This beautiful baby frock features intricate embroidery and a flowy design, ideal for dressy occasions. Soft, breathable fabric keeps your little one comfortable.",
    },
    {
      id: 20,
      name: "Adorable Floral Girls Dress",
      price: "$120",
      rating: 4.2,
      image: baby4,
      Description:
        "A sweet floral dress designed for girls, perfect for casual outings or more formal events. The soft fabric and charming design make it an instant favorite.",
    },
    {
      id: 21,
      name: "Vertical Stripped Shirt",
      price: "$120",
      rating: 4.5,
      image: tshirt1,
      Description:
        "A stylish vertical striped shirt with a classic design. Soft, breathable, and ideal for creating both casual and semi-formal looks.",
    },
    {
      id: 22,
      name: "Courage Graphic t-shirt",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: tshirt2,
      Description:
        "A bold and stylish graphic t-shirt with a 'Courage' message, perfect for making a statement while staying comfortable.",
    },
    {
      id: 23,
      name: "Loose Fit Bermuda Shorts",
      price: "$180",
      rating: 4.5,
      image: shirt3,
      Description:
        "Comfortable and stylish Bermuda shorts that provide a relaxed fit. A must-have for casual summer days, offering both ease and style.",
    },
    {
      id: 24,
      name: "Faded Skinny Jeans",
      originalPrice: "$160",
      discountedPrice: "$130",
      discount: "-30%",
      rating: 4.5,
      image: shirt4,
      Description:
        "These jeans feature a distressed, faded wash with a skinny fit, offering a modern, edgy look. Perfect for pairing with casual t-shirts or shirts.",
    },
  ];

  const product = products.find((item) => item.id === parseInt(id)); // Find product by ID

  // Handle increment/decrement
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    navigate("/cartDetails", {
      state: {
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productImage: product.image, // Pass the product image
      },
    });
  };

  // Render fallback if no product is found
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Wrapper>
        <StyledHr />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <Separator>›</Separator>
        <BreadcrumbItem href="/">Shop</BreadcrumbItem>
        <Separator>›</Separator>
        <BreadcrumbItem href="/">Men</BreadcrumbItem>
        <Separator>›</Separator>
        <CurrentItem>{product.name}</CurrentItem>
      </Breadcrumb>

      <Content>
        <MainImage src={product.image} alt={product.name} />

        <DetailsSection>
          <Title>{product.name}</Title>
          <RatingContainer>
            <Star src={star} alt="Rating star" />
            <Ratings>{product.rating}/5</Ratings>
          </RatingContainer>
          <PriceContainer>
            {product.discountedPrice ? (
              <>
                <DiscountedPrice>{product.discountedPrice}</DiscountedPrice>
                <OriginalPrice>{product.originalPrice}</OriginalPrice>
                <DiscountBadge>{product.discount}</DiscountBadge>
              </>
            ) : (
              <Price>{product.price}</Price>
            )}
          </PriceContainer>

          <Paragraph>{product.Description}</Paragraph>
          <StyledHr />
          <Heading>Select Color</Heading>
          <ColorsWrapper>
            {colors.map((color, index) => (
              <ColorCircle
                key={index}
                color={color}
                selected={selectedColor === color}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </ColorsWrapper>

          <Heading>Select Size</Heading>
          <SizeOptions>
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <SizeButton
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </SizeButton>
            ))}
          </SizeOptions>

          <StyledHr />
          <AddToCart>
            <QuantityInput>
              <Decrement onClick={handleDecrement}>-</Decrement>
              <QuantityInputField
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
              <Increment onClick={handleIncrement}>+</Increment>
            </QuantityInput>

            <CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
          </AddToCart>
        </DetailsSection>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  color: #333;
`;

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #0000001a;
  margin: 20px 0;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: #00000099;
`;

const BreadcrumbItem = styled.a`
  text-decoration: none;
  color: #00000099;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: -10px;
`;

const Separator = styled.span`
  margin: 0 5px;
  color: #00000099;
  font-size: 45px;
`;

const CurrentItem = styled.span`
  font-weight: 500;
  color: #000;
  margin-bottom: -12px;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Allow content to wrap for smaller screens */
`;

const MainImage = styled.img`
  width: 400px;
  height: 554px;
  border-radius: 20px;
  border: 1px solid #ddd;
  &:hover {
    border: 1px solid #f0eeed;
  }

  @media (max-width: 980px) {
    width:44%;
    height: auto;
  }
     @media (max-width:760px){
     width:38%

     }
      @media (max-width:640px){
      width:100%;
      height: auto;
      }
`;

const DetailsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #000000;
  line-height: 48px;
  width: 81%;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Star = styled.img`
  width: 24%;
  height: auto;
  margin-right: 8px;
`;

const Ratings = styled.div`
  font-size: 16px;
  color: #000000;
  font-weight: 400;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const DiscountedPrice = styled.span`
  color: #000000;
  font-size: 32px;
  font-weight: 700;
`;

const DiscountBadge = styled.span`
  background-color: #ff33331a;
  padding: 6px 14px;
  font-size: 16px;
  border-radius: 62px;
  margin-left: 10px;
  color: #ff3333;
  font-weight: 400;
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const OriginalPrice = styled.span`
  margin-left: 10px;
  text-decoration: line-through;
  color: #0000004d;
  font-size: 32px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #00000099;
  max-width: 700px;
  margin-top: 20px;
  text-align: justify;
  font-weight: 400;
`;

const ColorsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ColorCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.selected ? "3px solid #000" : "2px solid transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #555;
  }
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const SizeButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #ddd;
  border-radius: 62px;
  background-color: ${(props) =>
    props.className === "selected" ? "#000" : "#f0f0f0"};
  color: ${(props) =>
    props.className === "selected" ? "#fff" : "#00000099"};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    border-color: #000;
  }
`;

const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const QuantityInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 62px;
  padding: 16px 20px;
  gap: 10px;
`;

const QuantityInputField = styled.input`
  width: 30px;
  text-align: center;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #000;
`;

const Increment = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Decrement = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const CartButton = styled.button`
  padding: 16px 54px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 62px;
  cursor: pointer;
  width: 400px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;
export default DetailsPage;
