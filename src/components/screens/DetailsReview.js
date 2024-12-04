import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

// Function to generate random ratings
const getRandomRating = () => {
  return parseFloat((Math.random() * 5).toFixed(1)); // Random rating between 0 and 5, with 1 decimal point
};

const Reviews = () => {
  const allReviews = [
    {
      id: 1,
      name: "Samantha D.",
      date: "August 14, 2023",
      content:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      rating: getRandomRating(),
    },
    {
      id: 2,
      name: "Alex M.",
      date: "August 15, 2023",
      content:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      rating: getRandomRating(),
    },
    {
      id: 3,
      name: "Ethan R.",
      date: "August 15, 2023",
      content:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      rating: getRandomRating(),
    },
    {
      id: 4,
      name: "Olivia P.",
      date: "August 15, 2023",
      content:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      rating: getRandomRating(),
    },
    {
      id: 5,
      name: "Liam K.",
      date: "August 15, 2023",
      content:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      rating: getRandomRating(),
    },
    {
      id: 6,
      name: "Ava H.",
      date: "August 15, 2023",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: getRandomRating(),
    },

    {
      id: 6,
      name: "Ava H.",
      date: "August 15, 2023",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: getRandomRating(),
    },
    {
      id: 6,
      name: "Ava H.",
      date: "August 15, 2023",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: getRandomRating(),
    },
    {
      id: 6,
      name: "Ava H.",
      date: "August 15, 2023",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: getRandomRating(),
    },
    {
      id: 6,
      name: "Ava H.",
      date: "August 15, 2023",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      rating: getRandomRating(),
    },
  ];

  const [reviews, setReviews] = useState(allReviews.slice(0, 3));
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [newReview, setNewReview] = useState({
    name: "",
    content: "",
    rating: 0,
  });

  const loadMoreReviews = () => {
    const nextReviews = allReviews.slice(reviews.length, reviews.length + 3); // Load 3 more reviews
    setReviews([...reviews, ...nextReviews]); // Add new reviews to the current list
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.content && newReview.rating) {
      setReviews([
        ...reviews,
        {
          ...newReview,
          id: reviews.length + 1,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setShowModal(false); // Close the modal
      setNewReview({ name: "", content: "", rating: 0 }); // Reset the form
    }
  };
  return (
    <Wrapper>
      <ReviewsContainer>
        {/* Tabs Section */}
        <Tabs>
          <div>Product Details</div>
          <div className="active">Rating & Reviews</div>
          <div>FAQs</div>
        </Tabs>

        {/* "All Reviews" Header */}
        <Header>
          <Title>
            All Reviews <span>({reviews.length})</span>
          </Title>

          <ActionButtons>
            <FilterIcon>
              <img
                src={require("../../assests/images/Frame (2).png")}
                alt="Filter Icon"
              />
            </FilterIcon>
            <Dropdown>
              <option value="latest">Latest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </Dropdown>
            <WriteReviewButton onClick={() => setShowModal(true)}>
              Write a Review
            </WriteReviewButton>
          </ActionButtons>
        </Header>

        {/* Reviews List */}
        <ReviewsList>
          {reviews.map((review) => (
            <ReviewCard key={review.id}>
              <div className="review-header">
                {/* Dynamic Star Ratings */}
                <StarRating rating={review.rating} />
                {/* Image Opposite Star Ratings */}
                <img
                  src={require("../../assests/images/Frame 27.png")}
                  alt="Icon"
                  className="icon"
                />
              </div>
              <h4>
                {review.name}
                {/* Add the green checkmark badge */}
                <VerifiedBadge>✓</VerifiedBadge>
              </h4>
              <p>{review.content}</p>
              <p className="date">Posted on {review.date}</p>
            </ReviewCard>
          ))}
        </ReviewsList>
      </ReviewsContainer>

      {showModal && (
        <Modal>
          <ModalContent>
            <h3>Write a Review</h3>
            <Form onSubmit={handleReviewSubmit}>
              <Input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                required
              />
              <Textarea
                placeholder="Your Review"
                value={newReview.content}
                onChange={(e) =>
                  setNewReview({ ...newReview, content: e.target.value })
                }
                required
              />
              <Input
                type="number"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                step="0.1"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    rating: parseFloat(e.target.value),
                  })
                }
                required
              />
              <ModalActions>
                <SubmitButton type="submit">Submit</SubmitButton>
                <CancelButton onClick={() => setShowModal(false)}>
                  Cancel
                </CancelButton>
              </ModalActions>
            </Form>
          </ModalContent>
        </Modal>
      )}

      {/* Load More Reviews Button */}
      <ActionButtons>
        <LoadMoreButton onClick={loadMoreReviews}>
          Load More Reviews
        </LoadMoreButton>
      </ActionButtons>
    </Wrapper>
  );
};

// Star Rating Component
const StarRating = ({ rating }) => (
  <div className="stars">
    {Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      if (rating >= starValue) {
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: "#FFD700" }}
          />
        ); // Full Star
      } else if (rating > starValue - 1) {
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStarHalfAlt}
            style={{ color: "#FFD700" }}
          />
        ); // Half Star
      } else {
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: "#ddd" }}
          />
        ); // Empty Star
      }
    })}
  </div>
);

// Styled Components
const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ReviewsContainer = styled.div`
  padding: 40px 0;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;

  div {
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 400;
    font-size: 20px;
    color: #00000099;
    transition: all 0.3s ease;

    @media (max-width: 480px) {
      padding: 6px 0;
    }

    &:hover {
      color: #000000;
      border-bottom: 2px solid #000000;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    width: 117%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0;

  span {
    font-size: 16px;
    font-weight: normal;
    color: #888;
    margin-left: 5px;
  }
`;

const FilterIcon = styled.button`
  background: #f1f1f1;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const ReviewsList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const Dropdown = styled.select`
  padding: 16px 20px;
  font-size: 14px;
  border-radius: 62px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: none;
  color: #000000;
  width: 120px;
`;

const WriteReviewButton = styled.button`
  background: #000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 20px;
  border: none;
  border-radius: 62px;
  cursor: pointer;
`;
const ReviewCard = styled.div`
  background: #fff;
  border: 1px solid #0000001a;
  border-radius: 20px;
  padding: 28px 32px 28px 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: 49%;
   @media (max-width:980px){
   width:48%;
   } 

  @media (max-width: 760px) {
    width: 48%;
  }

   @media (max-width:480px){
   width:100%;
   }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin: 0 0 10px 0;
  }

  p {
    font-size: 16px;
    color: #00000099;
    margin: 10px 0 15px 0;
    line-height: 22px;
  }

  .date {
    font-size: 12px;
    color: #888;
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .icon {
    width: 24px; /* Adjust as per your design */
    height: 24px;
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

const ActionButtons = styled.div`
  display: flex;
  justify-content: center; /* Center the button horizontally */
  align-items: center;
  gap: 20px;
  

   @media (max-width:480px){
   width:72%;
   }
`;

const LoadMoreButton = styled.button`
  border: 1px solid #0000001a; /* Light border color */
  border-radius: 62px; /* Rounded edges */
  padding: 16px 54px 16px 54px; /* Top/bottom: 16px, Left/right: 54px */
  color: #000; /* Black text */
  font-size: 16px; /* Font size */
  font-weight: 500; /* Semi-bold */
  background-color: #ffff; /* White background */
  cursor: pointer;
  text-align: center; /* Center-align text */
  display: inline-flex; /* Ensures flexible alignment */
  justify-content: center; /* Center text horizontally */
  align-items: center; /* Center text vertically */
  gap: 10px; /* Adjust gap if needed (e.g., for an icon) */
  transition: all 0.3s ease; /* Smooth hover effect */
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background: #00c853;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #009624;
  }
`;

const CancelButton = styled.button`
  background: #d32f2f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #b71c1c;
  }
`;

export default Reviews;
