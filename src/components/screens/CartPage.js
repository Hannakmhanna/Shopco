import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
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
import mailIcon from '../../assests/images/message.png';

// Cart component
const Cart = () => {
  const location = useLocation(); // Access location data passed via navigate
  const { productId, productName, productPrice, productImage } =
    location.state || {}; // Safely access location state

  const products = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "$120",
      rating: 4.5,
      image: tshirtImage,
      Description:
        "Mens Solid Dotted Unique Design Oversized Tshirt for Men - Round Neck Loose Fit Drop Shoulder Mens T-Shirt",
      size: "Medium",
      color: "Black",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: jeansImage,
      size: "Medium",
      color: "Blue",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "$180",
      rating: 4.5,
      image: shirtImage,
      size: "Large",
      color: "Red",
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
      name: "Men's Classic fit Plain Satin Casual Shirt for Men",
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
      name: "Women Anarkali Kurta and Pant Set with Dupatta",
      price: "$799",
      rating: 4.4,
      image: pink,
    },

    {
      id: 13,
      name: "Vertical Stripped Shirt",
      price: "$120",
      rating: 4.5,
      image: tshirtImage,
    },
    {
      id: 14,
      name: "Courage Graphic t-shirt",
      originalPrice: "$260",
      discountedPrice: "$240",
      discount: "-20%",
      rating: 3.5,
      image: jeansImage,
    },
    {
      id: 15,
      name: "Loose Fit Bermuda Shorts",
      price: "$180",
      rating: 4.5,
      image: shirtImage,
    },
    {
      id: 16,
      name: "Faded Skinny Jeans",
      originalPrice: "$160",
      discountedPrice: "$130",
      discount: "-30%",
      rating: 4.5,
      image: stripedTshirtImage,
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
      name: "Violet Ocean Net Flair Baby Frock",
      price: "$120",
      rating: 4.4,
      image: baby2,
    },
    {
      id: 19,
      name: "Embroidery Sequence Baby Frock",
      price: "$120",
      rating: 4.4,
      image: baby3,
    },
    {
      id: 20,
      name: "Adorable Floral Girls dress",
      price: "$120",
      rating: 4.4,
      image: baby4,
    },
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
  ];

  // State to hold the selected product in the cart
  const [cartItems, setCartItems] = useState([]);

  // Effect hook to populate cartItems when the product is passed
  useEffect(() => {
    if (productId) {
      const product = products.find((item) => item.id === productId);
      if (product) {
        setCartItems([product]); // Add only the selected product to the cart
      }
    }
  }, [productId]); // Runs when productId changes (when a product is added)

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleDelete = (id) => {
    // Remove product by its id from the cartItems state
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      // Check if item.price or item.discountedPrice exists and is a valid string before using replace
      const price = item.discountedPrice || item.price;  // Prefer discountedPrice if available
      const priceValue = price ? parseFloat(price.replace('$', '')) : 0; // Default to 0 if price is invalid
  
      return total + priceValue * quantity;
    }, 0);
  };
  
  // Apply Discount (20%)
  const calculateDiscount = (subtotal) => {
    return subtotal * 0.2; // 20% discount
  };

  // Calculate Delivery Fee
  const deliveryFee = 40;

  // Calculate Total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    return subtotal - discount + deliveryFee;
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const total = calculateTotal();

  return (
    <Wrapper>
      <StyledHr />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <Separator>›</Separator>
        <BreadcrumbItem href="/cart">Cart</BreadcrumbItem>
      </Breadcrumb>
      <CartItemsWrapper>
        <CartItemHeader>
          <h2>Your Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div key={product.id}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductDetails>
                  <ProductName>{product.name}</ProductName>
                  <ProductInfo>Size: {product.size}</ProductInfo>
                  <ProductInfo>Color: {product.color}</ProductInfo>
                  <ProductInfo>
                    Price:{" "}
                    {product.discountedPrice ? (
                      <DiscountedPrice>
                        {product.discountedPrice}
                      </DiscountedPrice>
                    ) : (
                      product.price || "Price not available" // Fallback message if no price
                    )}
                  </ProductInfo>
                </ProductDetails>
                <LeftButtons>
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
                  <DeleteIcon
                    src={require("../../assests/images/delete.png")}
                    alt="Delete"
                    className="Delete"
                    onClick={() => handleDelete(product.id)}
                  />
                </LeftButtons>
              </div>
            ))
          ) : (
            <p>No products in the cart.</p>
          )}
        </CartItemHeader>

        <OrderSummaryWrapper>
          <h3>Order Summary</h3>
          <SummaryItem>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryItem>
          <SummaryItem redText>
            <span>Discount (-20%)</span>
            <span className="number">-${discount.toFixed(2)}</span>
          </SummaryItem>
          <SummaryItem >
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </SummaryItem>
          <StyledHr />
          <SummaryItem isTotal>
            <span className="total">Total</span>
            <span className="number">${total.toFixed(2)}</span>
          </SummaryItem>
          <PromoCodeWrapper>
          <PromoButton
              src={require("../../assests/images/checkout.png")}
              alt="Icon"
              className="icon"
            />
            <PromoCodeInput type="text" placeholder="Add promo code" />
            <ApplyButton>Apply</ApplyButton>
          </PromoCodeWrapper>
          <CheckoutButton>Go to Checkout →</CheckoutButton>
        </OrderSummaryWrapper>
      </CartItemsWrapper>


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
          <ButtonContent>Subscribe to Newsletter</ButtonContent>
        </FormRight>
      </FormWrapper>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  border-radius: 10px;
 padding: 0px 0 200px;
  position:relative;


    @media (max-width: 1280px) {
    max-width: 1000px;
  }

  @media (max-width: 980px) {
    max-width: 900px;
  }

  @media (max-width: 760px) {
    max-width: 100%;
    padding-bottom: 100px;
  }

  @media (max-width: 640px) {
    padding-bottom: 80px;
  }

  @media (max-width: 480px) {
    padding-bottom: 60px;
  }

  @media (max-width: 360px) {
    padding-bottom: 50px;
  }

`;

const LeftButtons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;


   @media (max-width: 1280px) {
    gap: 8px;
  }

  @media (max-width: 980px) {
    gap: 5px;
  }

  @media (max-width: 760px) {
    gap: 4px;
  }

`;
const DiscountedPrice = styled.span`
  margin-right: 10px;
`;

const DeleteIcon = styled.img`
  position: absolute;
  top: -183px;
  left: 566px;

   @media (max-width: 1280px) {
    top: -150px;
    left: 520px;
  }

  @media (max-width: 980px) {
    top: -120px;
    left: 460px;
  }

  @media (max-width: 760px) {
    top: -100px;
    left: 400px;
  }

`;

const QuantityInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 12px 20px 12px 20px;
  border-radius: 62px;
  border: none;
  max-width: 120px;
  position: absolute;
  left: 474px;
  top: -51px;


    @media (max-width: 1280px) {
    top: -45px;
    left: 420px;
  }

  @media (max-width: 980px) {
    left: 350px;
  }

  @media (max-width: 760px) {
    left: 300px;
    top: -30px;
  }

  @media (max-width: 640px) {
    left: 220px;
  }

`;

const QuantityInputField = styled.input`
  width: 50px;
  text-align: center;
  border: none;
  font-size: 16px;
  outline: none;
  background: #f0f0f0;
`;

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border: none;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ddd;
  }
`;

const Decrement = styled(StyledButton)``;

const Increment = styled(StyledButton)``;
const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #0000001a;
  margin: 20px 0;


    @media (max-width: 1280px) {
    margin: 20px 0 15px;
  }

  @media (max-width: 980px) {
    margin: 15px 0;
  }

`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 20px;


   @media (max-width: 1280px) {
    margin-bottom: 15px;
  }

  @media (max-width: 980px) {
    margin-bottom: 10px;
  }

  @media (max-width: 640px) {
  
    margin-bottom: 15px;
  }
`;

const BreadcrumbItem = styled.a`
  color: #6c757d; /* Subtle gray */
  text-decoration: none;

  &:last-child {
    color: #000;
    pointer-events: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 10px;
  color: #6c757d;
  font-size: 20px;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  gap: 9px;
  h2 {
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 20px;
  }

  @media (max-width: 1280px) {
    gap: 6px;
  }

  @media (max-width: 980px) {
    gap: 4px;
  }
     @media (max-width:760px){
     flex-direction:column;
     margin:5px 0 389px;
     } 

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }

`;

const OrderSummaryWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 505px;
  border: 1px solid #0000001a;
  border-radius: 20px;
  h3{
    color: #000000;
    font-size: 24px;
    line-height: 49.4px;
  } 


    @media (max-width: 1280px) {
    width: 450px;
  }

  @media (max-width: 980px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 15px;
  }

`;
const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Space between the image and the text */
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px; /* Space between product details */
  font-size: 14px;
  color: #333;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ProductInfo = styled.p`
  margin: 0;
  color: #555;
`;

const CartItemHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  width: 715px;
  margin: 0px 0;

  @media (max-width:640px) {
    width:555px;
      padding:97px;
  }
     @media (max-width:480px){
     width:400px;
     padding:97px;
     }
      @media (max-width:360px){
      width:300px;
      padding:97px;
      }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px; /* Spacing between items */
  border-bottom: 1px solid #e9ecef;
  position: relative;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const CartItemDetails = styled.div`
  flex: 1;
  display: flex;
  gap: 15px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #e9ecef;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #000000;
  }

  p span {
    color: #888; /* Gray color for the value */
    font-weight: normal; /* Adjust weight if needed */
  }
`;

const CartItemPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 8px 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f0f0f0;
  border-radius: 62px;
  padding: 12px 20px 12px 20px;
  position: absolute;
  left: 78%;
  top: 89px;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #495057;

    border: none;
    border-radius: 50%; /* Circular shape */
    cursor: pointer;


    

    &:hover {
      background: #dee2e6;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #495057;
  }
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #dc3545; /* Bootstrap-like red */
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  left: 94%;
  top: 5px;

  &:hover {
    color: #bd2130; /* Slightly darker red */
  }
`;

const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  h5 {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    color: #6c757d;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #495057;
  }
`;

const PromoCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position:relative;

  input {
    flex: 1;
    border: none;
    border-radius: 62px;
    background: #f8f9fa;
    color: #495057;
    width:93%;
    background:#F0F0F0;
    padding: 16px 41px;
    

    &:focus {
      outline: none;
      border-color: #adb5bd;
    }
  }

  button {
    padding: 12px 16px 12px 16px;
    background: #000;
    color: white;
    border: none;
    border-radius: 62px;
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      background: #212529;
    }
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000000;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 62px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 10px;
  line-height:27px;

  /* Styling for the total label */
  .total {
    font-weight: bold;
    color: #333; /* Default color for the label */
  }

  /* Styling for the total amount (number) */
  .number {
    font-weight: 700;
    color: ${(props) =>
      props.isTotal
        ? "#000000" // Black color for the total amount
        : props.redText
        ? "red" // Red color for discount and delivery fee
        : "#333"};
          font-size: ${(props) => (props.isTotal ? "20px" : "16px")};  // Default color for other items
  }
`;
const PromoCodeInput = styled.input`
  padding: 10px;
  width: 200px;
  margin-right: 10px;
  border-radius: 5px;
`;

const ApplyButton = styled(Button)`
   padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InvalidPromoCode = styled.div`
  color: red;
  margin-top: 10px;
`;


const PromoButton = styled.img`
position: absolute;
left: 10px;
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

const ButtonContent = styled.button`
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

export default Cart;
