import Slider from "react-slick";
import styled from "styled-components";
import { SectionHeading } from "../CommonStyles";

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  width: 100%;
  z-index: 0;
`;

export const StyledSectionHeading = styled(SectionHeading)`
  font-size: 25px;
`;

export const SliderSection = styled.div`
  position: relative;
  z-index: 0;
`;

export const CourseSlider = styled(Slider)`
  button {
    z-index: 999;
  }

  button:hover {
    color: white;
  }

  .slick-slide,
  .slick-track {
    overflow: visible;
  }

  .slick-prev {
    left: 10px !important;
    z-index: 999;
  }
  .slick-next {
    right: 10px !important;
    z-index: 1;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: white;
    background: black;
  }

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

export const CardSection = styled.div`
  width: 250px;
  cursor: pointer;
`;
