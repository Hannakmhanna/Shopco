import React, { useState } from 'react';
import styled from 'styled-components';
import  image1 from "../../assests/images/PARTY1.jpg"
import  image2 from "../../assests/images/PARTY2.jpg"
import  image3 from "../../assests/images/PART4.jpg"
import  image4 from "../../assests/images/PARTY3.jpg"
import  image5 from "../../assests/images/PARTY5.jpg"
import  image6 from "../../assests/images/PARTY6.jpg"
import  image7 from "../../assests/images/FORMAL7.jpg"
import  image8 from "../../assests/images/FORMAL8.jpg"
import  image9 from "../../assests/images/FORMAL9.jpg"
import mailIcon from '../../assests/images/message.png';



const Category = () => {
  const [activeColor, setActiveColor] = useState(null); // Track the active color

  const handleColorClick = (color) => {
    setActiveColor(color); // Set the clicked color as active
  };

  const products = [
    { id: 1, name: 'Womens Net Embroidered Semi-Stitched Gown Kalini Gown-New', price: '$199', image: image1, rating: 3.5 },
    { id: 2, name: 'Womens Casual Full Sleeve Maxi Dress', price: '$399', image: image2, rating: 4.5 },
    { id: 3, name: 'Men Solid Cotton Blend Straight Kurta Shirt', price: '$1120',  discountedPrice: '$160',
      discount: '-30%', image: image3, rating: 3.9 },
    { id: 4, name: 'Dresses for Women|One Piece Dress for Women|Western Dress', price: '$780',  discountedPrice: '$232',
      discount: '-20%', image: image4, rating: 3.0 },
    { id: 5, name: 'Mens Stylish Ethnic Wear Stand', price: '$2040', image: image5, rating: 5 }, // Ensure it's within range
    { id: 6, name: 'Mens Yellow Traditional Sherwani Indian Wedding Dress Party Outfit', price: '$500',  discountedPrice: '$1002',
      discount: '-20%',image: image6, rating: 4.7 }, // Ensure it's within range
    { id: 7, name: 'Womens Maroon Maxi', price: '$910', discountedPrice: '$232',
      discount: '-20%', image: image7, rating: 4.5 }, // Ensure it's within range
    { id: 8, name: 'Designer Plated Crape Dress for Women Stylish', price: '$540', image: image8, rating: 2.5 },
    { id: 9, name: 'Womens Maxi Ball Gown', price: '$130', image: image9, rating: 4.5 },
  ];
  const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10; // Adjust based on your data.

const handlePageChange = (page) => {
  setCurrentPage(page);
  // Update product list based on the selected page.
};

const handlePrevious = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};

const handleNext = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};


 // Remove this block if Rating is not needed
 const Rating = ({ value }) => {
  const fullStars = Math.floor(value); // Number of full stars
  const halfStar = value % 1 !== 0;   // Check if a half star is needed
  const emptyStars = 5 - Math.ceil(value); // Remaining stars

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} style={{ color: 'gold', fontSize: '20px' }}>★</span>
      ))}
      {/* Half star */}
      {halfStar && (
        <span key="half" style={{ position: 'relative', fontSize: '20px', color: 'gold' }}>
          <span style={{ display: 'inline-block',color:'#FFC633', width: '10px' }}>★</span>
      
        </span>
      )}
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} style={{ color: '#FFC633', fontSize: '20px' }}>★</span>
      ))}
      {/* Show numeric rating */}
      <span style={{ marginLeft: '5px', fontSize: '14px', color: '#666' }}>
        {value}/5
      </span>
    </div>
  );
};

  return (
    <Wrapper>
      <StyledHr />
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <Separator>›</Separator>
        <BreadcrumbItem href="/Party">Party</BreadcrumbItem>
      </Breadcrumb>
      <Container>
        <Filters>
          <FilterHeading>
            <h2>Filters</h2>
            <img
              src={require("../../assests/images/Frame (2).png")}
              alt="Icon"
              className="icon"
            />
          </FilterHeading>
          <StyledHr />
          <FilterSection title="">
  <ul>
    <li>
      <span>T-shirts</span>
     < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
           </li>
            <li>
            <span>Shorts</span>
            <img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
        </li>
       <li>
        <span>Shirts</span>
         < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
                 </li>
             <li>
             <span>Hoodies</span>
               <img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
                    </li>
             <li>
            <span>Jeans</span>
             <img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
             </li>
             </ul>
            </FilterSection>
            <StyledHr />

          <FilterSection title="Price">
            <FileReader>
            <h2>Price</h2>
            <img
              src={require("../../assests/images/Frame (5).png")}
              alt="Icon"
              className="frame"
            />
            </FileReader>
           <PriceSlider min="50" max="200" />
         <PriceRange>
         <span>$50</span>
         <span>$200</span>
        </PriceRange>
          </FilterSection>
          <StyledHr />
          <FilterSection title="Colors">
            <ColorReader>
            <h2>Colors</h2>
            <img
              src={require("../../assests/images/Frame (5).png")}
              alt="Icon"
              className="frame"
            />
            </ColorReader>
            <ColorOptions>
              {['#000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff',
                '#00ffff', '#800080', '#ffa500', '#008080'].map((color, index) => (
                <Color
                  key={index}
                  color={color}
                  active={activeColor === color} // Highlight active color
                  onClick={() => handleColorClick(color)} // Set active color on click
                >
                  {activeColor === color && <Tick>✔</Tick>} {/* Show tick on active color */}
                </Color>
              ))}
            </ColorOptions>
          </FilterSection>
          <StyledHr />
          <FilterSection title="Size">
           
            <SizeReader>
            <h2>Size</h2>
              <img
                src={require("../../assests/images/Frame (5).png")}
                alt="Icon"
                className="frame"
              />
            </SizeReader>
            <SizeOptions>
              <button>XX-Small</button>
              <button>x-small</button>
              <button>small</button>
              <button>Medium</button>
              <button>Large</button>
              <button>x Large</button>
              <button>xx Large</button>
              <button>3x large</button>
              <button>4x large</button>
            </SizeOptions>
          </FilterSection>
          <StyledHr />
          <FilterSection title="Dress style">
            <DressReader>
            <h2>DressStyle</h2>
              <img
                src={require("../../assests/images/Frame (5).png")}
                alt="Icon"
                className="frame"
              />
            </DressReader>
            <DressStyle>
              <ul>
                <li>T-shirts</li>
                < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
                <li>Shorts</li>
                < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
                <li>Shirts</li>
                < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
                <li>Hoodies</li>
                < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
                <li>Jeans</li>
                < img
              src={require("../../assests/images/Vector (8).png")}
              alt="Icon"
              className="icon"
            />
              </ul>
            </DressStyle>
          </FilterSection>
              <FilterButton>Apply Filter</FilterButton>
        </Filters>

        <Products>
          <Header>
            <h2>Party</h2>
            <Sort>
              <span>Showing 1-10 of 100 Products</span>
              <span>Sort by:</span>
              <select>
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </Sort>
          </Header>
          <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <Rating value={product.rating} />
          {product.discountedPrice ? (
            <PriceWrapper>
              <DiscountedPrice>{product.discountedPrice}</DiscountedPrice>
              <OriginalPrice>{product.price}</OriginalPrice>
              <Discount>{product.discount}</Discount>
            </PriceWrapper>
          ) : (
            <p>{product.price}</p>
          )}
        </ProductCard>
      ))}
    </ProductGrid>
   

      <PaginationWrapper>
  <button disabled={currentPage === 1} onClick={handlePrevious}>
    ← Previous
  </button>
  <PageNumbers>
    {Array.from({ length: totalPages }).map((_, index) => (
      <span
        key={index}
        className={`page ${currentPage === index + 1 ? "active" : ""}`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </span>
    ))}
  </PageNumbers>
  <button disabled={currentPage === totalPages} onClick={handleNext}>
    Next →
  </button>
     </PaginationWrapper>
        </Products>
      </Container>
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

// Styled Components
const Wrapper = styled.div`
    padding: 20px 0 146px 20px;
    position:relative;
`;

const ColorOptions = styled.div`
     display: flex;
    gap: 10px;
    flex-wrap: wrap;
    width: 79%;

`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: ${(props) => (props.active ? '3px solid #007bff' : '1px solid #ccc')}; /* Active color highlight */
  box-shadow: ${(props) => (props.active ? '0px 0px 8px rgba(0, 123, 255, 0.7)' : 'none')}; /* Add glow effect */
  transition: all 0.3s ease;
  position: relative; /* Needed for tick positioning */

  &:hover {
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
`;


const FilterButton = styled.button`
  width: 267px;
  border-radius: 62px;
  padding: 16px 54px;
  background-color: #000000; 
  color: #ffffff; 
  border: none;
  cursor: pointer;
  font-size: 16px;
  

  &:hover {
    background-color: #333; 
  }
`;

const Tick = styled.span`
    position: absolute;
    color: white;
    font-size: 16px;
    font-weight: bold;
    left: 5px;
`;



const FilterSection = styled.div`
  margin-bottom: 68px;
  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position:relative;
  }

  li {
    padding: 8px 0;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #007bff;
      font-weight: 500;
    }

  }
        img {
      width: 8px; /* Adjust the size of the arrow */
      position:absolute;
      left:248px; /* Adds space between the text and the arrow */
    }
        img.frame {
        width: 19px;
        margin-left:38px; /* Adjust the size of the frame */
        }
      span {
      color:#fffff;
      font-size:16px; /* Ensures the text takes up available space and pushes the arrow to the right */
    }
   
`;
const FileReader = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;  
  margin-bottom: 20px;
`;
const DressReader = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;  
  margin-bottom: 20px;
`;

const ColorReader = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;  
  margin-bottom: 20px;
  `;
 

  const SizeReader = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;  
  margin-bottom: 20px;
  `;

const StyledHr = styled.hr`
  margin-bottom: 20px;
  border: none;
  height: 1px;
  background: #ddd;
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const BreadcrumbItem = styled.a`
  color: #00000099;
  text-decoration: none;

  &:last-child {
    color: #000000;
    pointer-events: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 10px;
  color: #00000099;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Filters = styled.div`
    flex: 1;
    padding: 20px 24px 20px 24px;
    border-radius: 20px;
    border: 1px solid #0000001A;
`;

const PriceRange = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const FilterHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
`;

const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 79%;

  button {
     background: #F0F0F0;
    cursor: pointer;
    border-radius: 62px;
    border: none;
    padding: 10px 20px 10px 20px;
    color: #00000099;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;


const PriceSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #000000; /* Light grey track */
  border-radius: 20px;
  outline: none;
  cursor: pointer;

  /* Slider Thumb (for Chrome, Safari, etc.) */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #000; /* Black thumb */
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

 
`;


const Products = styled.div`
  flex: 3;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Sort = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap:8px;
  color:#00000099;
 

  select {
    margin-left: 6px;
    border: none;
    color: #000000;
    font-weight: bold;
  }
`;

const ProductGrid = styled.div`
display:flex;
justify-content:space-between;
width:100%;
flex-wrap:wrap;
gap:20px;
margin-bottom:20px;
`;

const ProductCard = styled.div`

  border-radius: 20px;
  width:31%;
 

  img {
    max-width: 100%;
    border-radius: 5px;
  }

  h3 {
   
    font-size: 18px;
    font-weight:700;
    line-height:27px;
  }

  p {
    font-weight: bold;
    color: #000000;
  }
`;
const DressStyle = styled.div`
  margin-bottom: 20px;

  ul{
  list-style: none;

  }
  img{
 margin-top:-9%;
  }


`;


const PriceWrapper = styled.div`
  display: flex;
 gap:9px;
  align-items: center;
  margin-top: 10px;
`;

const DiscountedPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: red;
  margin: 0;
`;

const OriginalPrice = styled.p`
  font-size: 20px;
  text-decoration: line-through !important;
  color: #00000066 !important;
  margin: 0;
`;

const Discount = styled.p`
  font-size: 14px;
  color: #FF3333 !important;
  margin: 0;
  background-color:#FF33331A;
  padding:6px 14px 6px 14px;
  border-radius: 62px;
  
`;



const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  margin-top: 20px;

  button, span {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button {
    border: 1px solid #ddd;
    background-color: #fff;

    &:hover {
      background-color: #f0f0f0;
    }

    &:disabled {
      color: #aaa;
      cursor: not-allowed;
      border-color: #eee;
      background-color: #fafafa;
    }
  }

  span {
    margin: 0 5px;
    color: #333;
    font-weight: 500;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  align-items: center;

  .page {
    margin: 0 5px;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    color:#000000;

    &.active {
      background-color: #000;
      color: #00000;
      background-color: #0000000F;
    }

    &:hover {
      background-color: #f0f0f0;
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
  position:absolute;
  bottom:-79px;
  width: 90%;
 left: 54px;

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
export default Category;
