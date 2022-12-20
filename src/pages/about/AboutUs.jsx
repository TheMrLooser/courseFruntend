import { CheckBoxOutlined } from "@mui/icons-material";
import React from "react";
import {
  Banner,
  BannerSection,
  BriefSection,
  Cards,
  CourseImage,
  GlobalStyles,
  ImageColumn,
  InfoColumn,
  SectionDesc,
  SectionHeading,
  SectionImage,
  StyledSlider,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Benefit,
  BenefitDesc,
  BenefitLogo,
  BenefitSection,
  Box,
  Designation,
  Heading,
  Name,
  RegisterButton,
  RegisterNowSection,
  TeamCard,
  TeamDesc,
  TeamDetails,
  TeamHeading,
  TeamSection,
  Wrapper,
  OverViewSection,
  WrapSectionImage,
  CourseImageSection,
} from "./AboutUs.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { team } from "./teamData";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";

const AboutUs = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box>
      <GlobalStyles />
      <Header />

      <Wrapper>
        <Pulse>
          <BannerSection>
            <Banner src="./assets/about-banner.jpg" />
          </BannerSection>
        </Pulse>
        <OverViewSection>
          <SectionHeading>Overview</SectionHeading>
          <SectionDesc>
            Donec mi velit, vehicula at efficitur ut, porta in neque. Morbi a
            ligula lacus. Etiam metus ipsum, faucibus ut mollis non, porta quis
            lorem. Etiam non enim ornare, feugiat sapien ac, malesuada eros. Sed
            id tempor nisl, a tempus mauris. Sed odio nibh, ultrices in finibus
            sed, dignissim ut ipsum. Curabitur augue risus, iaculis at
            condimentum a, imperdiet id orci. Suspendisse sed hendrerit lacus.
            Praesent felis eros, accumsan sed dictum vel, sollicitudin et nisl.
          </SectionDesc>
        </OverViewSection>
        <Fade left>
          <BriefSection>
            <InfoColumn>
              <SectionHeading>Our Mission</SectionHeading>
              <SectionDesc>
                Vestibulum tempor vitae dui ut luctus. Aliquam quis dapibus
                enim. Pellentesque rhoncus facilisis rutrum. Fusce vitae
                sollicitudin diam. Fusce rhoncus in justo at auctor. Nullam
                ipsum tortor, dapibus ac sodales et, euismod vel urna. Proin
                pellentesque elementum sem a molestie.{" "}
              </SectionDesc>
            </InfoColumn>
            <ImageColumn>
              <SectionImage src="./assets/mission.jpg" />
            </ImageColumn>
          </BriefSection>
        </Fade>
        <Fade right>
          <BriefSection>
            <ImageColumn>
              <StyledSlider {...settings}>
                <WrapSectionImage>
                  <SectionImage src="./assets/visions/1.jpg" />
                </WrapSectionImage>
                <WrapSectionImage>
                  <SectionImage src="./assets/visions/2.jpg" />
                </WrapSectionImage>
                <WrapSectionImage>
                  <SectionImage src="./assets/visions/3.jpg" />
                </WrapSectionImage>
              </StyledSlider>
            </ImageColumn>
            <InfoColumn>
              <SectionHeading>Our Vision</SectionHeading>
              <SectionDesc>
                Vestibulum tempor vitae dui ut luctus. Aliquam quis dapibus
                enim. Pellentesque rhoncus facilisis rutrum. Fusce vitae
                sollicitudin diam. Fusce rhoncus in justo at auctor. Nullam
                ipsum tortor, dapibus ac sodales et, euismod vel urna. Proin
                pellentesque elementum sem a molestie.{" "}
              </SectionDesc>
            </InfoColumn>
          </BriefSection>
        </Fade>
        <TeamSection>
          <TeamHeading>Our Leading, Strong And Creative Team</TeamHeading>

          <TeamDetails>
            {team.map((member, index) => {
              return (
                <TeamCard key={index}>
                  <CourseImageSection>
                    <CourseImage src={member.img} />
                  </CourseImageSection>
                  <TeamDesc>
                    <Name>{member.name}</Name>
                    <Designation>{member.designation}</Designation>
                  </TeamDesc>
                </TeamCard>
              );
            })}
          </TeamDetails>
        </TeamSection>
        <RegisterNowSection>
          <Heading>Register for Free!</Heading>
          <BenefitSection>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>No credit card required</BenefitDesc>
            </Benefit>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>Cancel anytime</BenefitDesc>
            </Benefit>
          </BenefitSection>
          <RubberBand>
            <Link to="/signup">
              <RegisterButton>Register Now</RegisterButton>
            </Link>
          </RubberBand>
        </RegisterNowSection>
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default AboutUs;
