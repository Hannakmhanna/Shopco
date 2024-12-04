import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import ArrowButton1 from "../../assests/images/arrow-down-bold 1.png";
import ArrowButton2 from "../../assests/images/arrow-down-bold 2.png";
import mailIcon from "../../assests/images/message.png";

// Review data
const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. Every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered ShopCo. Every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. Every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Jessica W.",
    text: "The collection at ShopCo is amazing! I found stylish clothes that fit perfectly, and their customer service is excellent!",
    rating: 5,
  },
  {
    name: "John D.",
    text: "ShopCo has some of the best quality clothing I've ever bought. Highly recommend their trendy selections!",
    rating: 4,
  },
  {
    name: "Emily R.",
    text: "The clothes are of great quality and the fit is perfect! ShopCo is my go-to for fashion.",
    rating: 5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  // Handle Next Button
  const handleNext = () => {
    if (currentIndex + reviewsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + reviewsPerPage);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  // Handle Previous Button
  const handlePrev = () => {
    if (currentIndex - reviewsPerPage >= 0) {
      setCurrentIndex(currentIndex - reviewsPerPage);
    } else {
      setCurrentIndex(
        Math.floor(reviews.length / reviewsPerPage) * reviewsPerPage
      ); // Loop to the last set
    }
  };

  const currentReviews = reviews.slice(
    currentIndex,
    currentIndex + reviewsPerPage
  );

  return (
    <Wrapper>
      <Container>
        <Heading>OUR HAPPY CUSTOMERS</Heading>
        <ArrowContainer>
          <ArrowImage src={ArrowButton1} alt="Previous" onClick={handlePrev} />
          <ArrowImage src={ArrowButton2} alt="Next" onClick={handleNext} />
        </ArrowContainer>
      </Container>

      <ReviewContainer>
        {currentReviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewerInfo>
              <Stars>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Stars>
              <ReviewerName>
                {review.name}
                <VerifiedBadge>✓</VerifiedBadge>
              </ReviewerName>
            </ReviewerInfo>
            <ReviewText>{review.text}</ReviewText>
          </ReviewCard>
        ))}
      </ReviewContainer>

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

// Styled components
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  padding: 60px 0 200px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 129px;
  }
`;

const ReviewCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #0000001a;
  max-width: 350px;
  width: 100%;
  text-align: center;
`;

const Stars = styled.div`
  color: #f5c518;
  display: flex;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  font-weight: 400;
  color: #00000099;
  text-align: left;
`;

const ReviewerInfo = styled.div`
  text-align: left;
  gap: 10px;
  margin-bottom: 10px;
`;

const ReviewerName = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const ArrowImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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

   @media (max-width:980px) 
   {
   position:absolute;
   bottom: -50px;
   
   }

  @media (max-width: 760px) {
    padding: 10px 64px;
  }
  @media (max-width: 640px) {
    padding: 1px 13px;
  }
  @media (max-width: 480px) {
    width: 104%;
    padding: 1px 36px 12px 10px;
  }
  @media (max-width: 360px) {
    width: 101%;
  }
    @media (max-width: 480px) {
    padding:1px 35px;
    width:93%;
    }
`;

const FormLeft = styled.div`
  flex: 1;
  h4 {
    font-size: 41px;
    font-weight: 700;
    color: #fff;
    margin: 0;

    @media (max-width: 760px) {
      width: 139%;
    }
    @media (max-width: 640px) {
      width: 144%;
    }
    @media (max-width: 480px) {
      width: 84%;
    }
    @media (max-width: 360px) {
      width: 115%;
      font-size: 31px;
    }
    @media (max-width: 320px) {
      width: 104%;
    }
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
  @media (max-width: 760px) {
    width: 257px;
    margin-left: 6px;
  }
  @media (max-width: 640px) {
    width: 259px;
  }
  @media (max-width: 480px) {
    width: 359px;
  }
  @media (max-width: 360px) {
    width: 244px;
  }
  @media (max-width: 320px) {
    width: 261px;
  }
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

  @media (max-width: 760px) {
    width: 257px;
  }
  @media (max-width: 480px) {
    width: 359px;
  }
  @media (max-width: 360px) {
    width:245px;
  }
  @media (max-width: 320px) {
    width: 271px;
  }
`;

const VerifiedBadge = styled.span`
  display: inline-block;
  background: #00c853; /* Green background */
  color: #fff; /* White checkmark */
  font-size: 12px;
  font-weight: bold;
  width: 16px;
  height: 16px;
  border-radius: 50%; /* Circular shape */
  text-align: center;
  line-height: 16px; /* Center align the text */
  margin-left: 8px; /* Space between name and badge */
`;

export default Reviews;
