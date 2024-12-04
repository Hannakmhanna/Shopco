import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowIcon from "../../assests/icons/Vector (4).svg";
import cartIcon from "../../assests/icons/Frame.svg";
import signupIcon from "../../assests/icons/Frame (1).svg";
import searchIcon from "../../assests/icons/Frame (2).svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <HeaderWrapper>
      <HamburgerIcon onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        &#9776; {/* Hamburger icon */}
      </HamburgerIcon>
      <Logo>SHOP.CO</Logo>
      <Nav>
        <NavList isMenuOpen={isMenuOpen}>
          <li>
            <a href="#shop">Shop</a>
            <img src={arrowIcon} alt="arrow" />
          </li>
          <li>
            <a href="#on-sale">On Sale</a>
          </li>
          <li>
            <a href="#new-arrivals">New Arrivals</a>
          </li>
          <li>
            <a href="#brands">Brands</a>
          </li>
        </NavList>
      </Nav>
      <SearchBar>
        <SearchWrapper>
          {/* Conditionally show the search icon on smaller screens */}
          <SearchIcon
            src={searchIcon}
            alt="search"
            onClick={toggleSearch}
            isSearchVisible={isSearchVisible}
          />
          {/* Conditionally show the search input based on `isSearchVisible` */}
          <SearchBarInput
            type="text"
            placeholder="Search for products..."
            isSearchVisible={isSearchVisible}
          />
        </SearchWrapper>
      </SearchBar>
      <Icons>
        <Link to="/signup">
          <img src={signupIcon} alt="Sign Up" />
        </Link>
        <Link to="/CartDetails">
          <img src={cartIcon} alt="Cart" />
        </Link>
      </Icons>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 9px 62px;
  background-color: white;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 980px) {
    padding: 9px 24px;
  }
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
  gap: 24px;
  margin-left: 34px;

  @media (max-width: 1100px) {
    gap: 17px;
  }

  li {
    a {
      text-decoration: none;
      color: black;
    }

    img {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 10px;
    margin-left: 0;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 980px) {
    display: block;
    margin-left: 59px;
  }

  @media (max-width: 640px) {
    margin-left: -3px;
  }

  @media (max-width: 320px) {
    margin-left: 14px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.img`
  display: block;

  @media (min-width: 481px) {
    display: none; /* Hide the search icon on large screens */
  }

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    left: 16px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const SearchBarInput = styled.input`
  padding: 12px 16px 12px 40px;
  border-radius: 62px;
  border: 1px solid #ccc;
  width: 427px;
  color: #000000;
  background-color: #f0f0f0;
  border: none;
  display: ${({ isSearchVisible }) => (isSearchVisible ? "block" : "none")};

  @media (min-width: 481px) {
    display: block; /* Always display the search input on larger screens */
    width: 427px; /* Keep the search input width the same */
  }

  @media (max-width: 480px) {
    display: ${({ isSearchVisible }) => (isSearchVisible ? "block" : "none")};
    width: 200px; // Adjust for small screen
  }

  @media (max-width: 360px) {
    width: 150px; // Adjust further on smaller screens
  }

  @media (max-width: 320px) {
    width: 120px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 10px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export default Header;
