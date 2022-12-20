import React from "react";
import { Container, StyledSlider } from "../CommonStyles";
import { ImgWrap, SlideImg, Wrapper } from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pulse from "react-reveal/Pulse";
import { carouselSettings } from "./carouselSettings";

const Carousel = () => {
  return (
    <Pulse>
      <Container>
        <Wrapper>
          <StyledSlider {...carouselSettings}>
            <ImgWrap>
              <SlideImg src="http://placekitten.com/g/1100/500" />
            </ImgWrap>
            <ImgWrap>
              <SlideImg src="http://placekitten.com/g/1100/500" />
            </ImgWrap>
            <ImgWrap>
              <SlideImg src="http://placekitten.com/g/1100/500" />
            </ImgWrap>
          </StyledSlider>
        </Wrapper>
      </Container>
    </Pulse>
  );
};

export default Carousel;
