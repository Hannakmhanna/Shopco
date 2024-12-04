import React, { useState } from 'react'; // Make sure to import useState
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import crossIconImage from '../../assests/icons/Frame (3).svg';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the TopBar when the cross icon is clicked
  const handleClose = () => {
    setIsVisible(false);
  };

  // If not visible, do not render the TopBar
  if (!isVisible) return null;

  return (
    <StyledTopBar>
      <span>
        Sign up and get 20% off your first order.
        <SignUpLink to="/signup">Sign Up Now</SignUpLink>
      </span>
      <CrossIcon src={crossIconImage} alt="close" onClick={handleClose} />
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  position: relative;

  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
    text-align: left; 
    display: flex;
    justify-content: center;
  }

  /* Very small screens like mobile */
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const CrossIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;

  /* Responsive adjustments for close icon */
  @media (max-width: 768px) {
    right: 10px; /* Move the cross icon closer to the edge on smaller screens */
    top: 10px;  /* Adjust position of the cross icon for mobile screens */
    width: 18px; /* Smaller icon for mobile */
    height: 18px; /* Smaller icon for mobile */
  }

  @media (max-width: 480px) {
    right: 10px;  /* Further adjustments for very small screens */
    top: 10px;
    width: 16px;
    height: 16px;
  }
     @media (max-width: 320px){
     display:none;
     }
`;

const SignUpLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }

  /* Responsive adjustments for the signup link */
  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font size for the link on smaller screens */
  }
`;

export default TopBar;
