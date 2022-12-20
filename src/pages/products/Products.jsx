import React from "react";
import { Container, GlobalStyles } from "../../components/CommonStyles";
import {
  DisplayImage,
  EnrollButton,
  ImageSection,
  InfoDesc,
  InfoSection,
  InfoTitle,
  LeftSection,
  RightSection,
  Wrapper,
} from "./Products.styles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Course from "../../components/course/Course";

const Products = () => {
  return (
    <Container bgColor="#f7f7f7">
      <GlobalStyles />
      <Header />
      <Wrapper>
        <InfoSection>
          <LeftSection>
            <InfoTitle>Let's Learn New Course & Gain More Skills</InfoTitle>
            <InfoDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi.
            </InfoDesc>
            <EnrollButton>Enroll Now</EnrollButton>
          </LeftSection>
          <RightSection>
            <ImageSection>
              <DisplayImage src="./assets/online-learning.svg" />
            </ImageSection>
          </RightSection>
        </InfoSection>
        {/* <Course heading="New Courses" /> */}
        <Course heading="Top courses in Development" catagory={'Development'}/>
        <Course heading="Top courses in Design" catagory={'development'} />
        {/* <Course heading="Top courses in Personal Development" /> */}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Products;
