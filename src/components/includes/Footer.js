import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <FooterContent>
          {/* Left Section */}
          <FooterLeft>
            <FooterHeading>SHOP.CO</FooterHeading>
            <FooterText>
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </FooterText>
            <SocialIcons>
              <IconLink href="#">
                <SocialIcon
                  src={require("../../assests/images/logo-twitter 2.png")}
                  alt="twitter"
                />
              </IconLink>
              <IconLink href="#">
                <SocialIcon
                  className="adjusted"
                  src={require("../../assests/images/2.png")}
                  alt="facebook"
                />
              </IconLink>
              <IconLink href="#">
                <SocialIcon
                  src={require("../../assests/images/logo-instagram 1.png")}
                  alt="instagram"
                />
              </IconLink>
              <IconLink href="#">
                <SocialIcon
                  src={require("../../assests/images/logo-github 1.png")}
                  alt="github"
                />
              </IconLink>
            </SocialIcons>
          </FooterLeft>

          {/* Columns */}
          <FooterColumn>
            <ColumnHeading>COMPANY</ColumnHeading>
            <List>
              <ListItem>
                <FooterLink href="#">About</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Features</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Works</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Career</FooterLink>
              </ListItem>
            </List>
          </FooterColumn>

          <FooterColumn>
            <ColumnHeading>HELP</ColumnHeading>
            <List>
              <ListItem>
                <FooterLink href="#">Customer Support</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Delivery Details</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Terms & Conditions</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </ListItem>
            </List>
          </FooterColumn>

          <FooterColumn>
            <ColumnHeading>FAQ</ColumnHeading>
            <List>
              <ListItem>
                <FooterLink href="#">Account</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Manage Deliveries</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Orders</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Payments</FooterLink>
              </ListItem>
            </List>
          </FooterColumn>

          <FooterColumn>
            <ColumnHeading>RESOURCES</ColumnHeading>
            <List>
              <ListItem>
                <FooterLink href="#">Free eBooks</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">Development Tutorial</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">How to - Blog</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="#">YouTube Playlist</FooterLink>
              </ListItem>
            </List>
          </FooterColumn>
        </FooterContent>

        {/* Bottom Section */}
        <FooterBottom>
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <PaymentMethods>
            <PaymentIcon
              src={require("../../assests/images/Badge (5).png")}
              alt="Visa"
            />
            <PaymentIcon
              src={require("../../assests/images/Badge (1).png")}
              alt="Mastercard"
            />
            <PaymentIcon
              src={require("../../assests/images/Badge (2).png")}
              alt="PayPal"
            />
            <PaymentIcon
              src={require("../../assests/images/Badge (3).png")}
              alt="Apple Pay"
            />
            <PaymentIcon
              src={require("../../assests/images/Badge (4).png")}
              alt="Google Pay"
            />
          </PaymentMethods>
        </FooterBottom>
      </Wrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 120px 20px 20px;
  @media (max-width: 1280px) {
    padding: 100px 20px 20px;
  }
  @media (max-width: 980px) {
    padding: 80px 20px 20px;
  }
  @media (max-width: 760px) {
    padding: 84px 20px 20px;
  }
  @media (max-width: 640px) {
    padding: 80px 20px 20px;
  }
  @media (max-width: 480px) {
    padding:68px 20px 20px;
  }
  @media (max-width: 360px) {
    padding: 78px 20px 20px;
  }
  @media (max-width: 320px) {
    padding: 82px 20px 20px;
  }
`;

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 980px) {
   margin:40px;
  }


`;

const FooterLeft = styled.div`
  max-width: 300px;
  margin-bottom: 40px;
  @media (max-width: 640px) {
    max-width: 100%;
    text-align: center;
  }
  @media (max-width: 980px) {
    width: 28%;
  }

  @media (max-width: 760px) {
    width: 55%;
  }
  @media (max-width: 640px) {
    width: 58%;
  }
     @media (max-width:480px){
     width:100%;
     }
`;

const FooterHeading = styled.h2`
  font-size: 33px;
  font-weight: 800;
  @media (max-width: 640px) {
    font-size: 28px;
    text-align:left;
  }
  @media (max-width: 360px) {
    font-size:31px;
  }
`;

const FooterText = styled.p`
  margin: 26px 0;
  line-height: 22px;
  font-size: 14px;
  width: 77%;
  font-weight: 400;
  color: #00000099;
  @media (max-width: 640px) {
    width: 100%;
    font-size: 16px;
  }

  @media (max-width: 980px) {
    width: 99%;
  }
    @media (max-width:640px){
    width:71%;
    text-align:left;
    }
     @media (max-width:360px){
     width:106%;
     }
      @media (max-width:320px){
      width:100%;
      }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const IconLink = styled.a`
  display: inline-block;
`;

const SocialIcon = styled.img`
  border: 1px solid #ccc;
  padding: 9px;
  border-radius: 50%;
  background: #fff;
  width: 40px;
  height: 40px;

  &.adjusted {
    border: none;
    padding: 0;
  }

  @media (max-width: 640px) {
    width: 35px;
    height: 35px;
  }
`;

const FooterColumn = styled.div`
  margin-right: 40px;
  margin-bottom: 40px;

  @media (max-width: 980px) {
    margin-right: 20px;
  }

  @media (max-width: 360px) {
    margin-bottom: 30px;
  }
    @media (max-width: 320px){
    width:41%;
    }
`;

const ColumnHeading = styled.h3`
  font-size: 16px;
  margin-bottom: 26px;
  font-weight: 500;
  line-height: 18px;
  font-family: sans-serif;
  letter-spacing: 3px;
  color: #000000;

   @media (max-width: 640px) {
    text-align:left;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
   @media (max-width: 640px) {
    text-align:left;
  }


`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #00000099;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;

  @media (max-width: 640px) {
    font-size: 14px;
  }
     @media (max-width:320px){
     font-size:18px;
     } 
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  margin-top: 55px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  p {
    font-size: 14px;
    color: #00000099;
    margin: 0;
    font-weight: 400;
    line-height: 18.9px;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const PaymentIcon = styled.img`
  width: 46.61px;
  height: 30.03px;

  @media (max-width: 640px) {
    width: 40px;
    height: 26px;
  }
`;

export default Footer;
