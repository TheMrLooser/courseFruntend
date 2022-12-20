import React from "react";
import { Container, GlobalStyles } from "../CommonStyles";
import { Link } from "react-router-dom";
import {
  CopyRightHeading,
  CopyRightSection,
  EmailId,
  EmailLogo,
  EmailSection,
  FollowHeading,
  FollowSection,
  FooterWrap,
  GetInTouch,
  GetInTouchHeading,
  iconStyles,
  MoreInfo,
  MoreInfoHeading,
  PhoneLogo,
  PhoneNumberOne,
  PhoneNumberSection,
  PhoneSection,
  SocialMedias,
  Wrapper,
} from "./Footer.styles";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Container bgColor="lightgrey">
      <GlobalStyles />
      <Wrapper>
        <FooterWrap>
          <MoreInfo>
            <MoreInfoHeading>More Information</MoreInfoHeading>
            <Link>Terms & Conditions</Link>
            <Link>News & Events</Link>
            <Link>All Products</Link>
            <Link>Privacy Policy</Link>
          </MoreInfo>
          <FollowSection>
            <FollowHeading>Social Media</FollowHeading>
            <SocialMedias>
              <Facebook sx={iconStyles} />
              <Instagram sx={iconStyles} />
              <Twitter sx={iconStyles} />
            </SocialMedias>
          </FollowSection>
          <GetInTouch>
            <GetInTouchHeading>
              For general enquiries, please contact us using the below
            </GetInTouchHeading>
            <PhoneSection>
              <PhoneLogo>
                <Phone />
              </PhoneLogo>
              <PhoneNumberSection>
                <PhoneNumberOne>+91-7030283481</PhoneNumberOne>
              </PhoneNumberSection>
            </PhoneSection>
            <EmailSection>
              <EmailLogo>
                <EmailOutlined />
              </EmailLogo>
              <EmailId>abc@gmail.com</EmailId>
            </EmailSection>
          </GetInTouch>
        </FooterWrap>
        <CopyRightSection>
          <CopyRightHeading>
            © 2017 Shenzhen Bell Creative Science and Education Co., Ltd. All
            rights reserved.
          </CopyRightHeading>
        </CopyRightSection>
      </Wrapper>
    </Container>
  );
};

export default Footer;
