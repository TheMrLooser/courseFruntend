import Slider from "react-slick";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    font-family: 'Poppins', sans-serif;
    }

    html,body{
        margin:0;
        padding:0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
`;

export const iconStyles = {
  width: "35px",
  height: "35px",
  cursor: "pointer",
};

export const Container = styled.div`
  width: 100%;
  border-radius: ${(props) => props.borderRadius || 0};
  background-color: ${(props) => props.bgColor || "white"};
  overflow: hidden;
`;

//BANNER

export const BannerSection = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const Banner = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

//BRIEF

export const BriefSection = styled.div`
  display: flex;
  flex-direction: ${(props) => "row" + props.direction};
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InfoColumn = styled.div`
  flex: 1;
  margin: auto;
`;

export const ImageColumn = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
`;
export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    min-height: 350px;
  }
`;

export const SectionHeading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  line-height: 1;
  margin: 0 0 20px;
`;

export const SectionDesc = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.7;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

//FORM

export const InputSection = styled.div`
  width: 100%;
  max-height: 110px;
  display: flex;
  flex-direction: column;
`;

export const Error = styled.p`
  max-width: 280px;
  font-size: 12px;
  font-weight: 400;
  color: red;
  margin: 0 0 2px;
`;

export const PhoneError = styled(Error)`
  min-height: 33px;
`;

export const InputLabel = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-block: 7px;
`;
export const InputField = styled.input`
  max-width: 280px;
  min-height: 30px;
  outline: none;
  border-radius: 7px;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid darkgray;
  padding: 5px 10px;
  font-family: "Poppins", sans-serif;
`;

export const FormButton = styled.button`
  width: 100%;
  min-height: 40px;
  border-radius: 7px;
  outline: none;
  border: none;
  background-color: #0014ff;
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: ${(props) => (props.method === "signup" ? "20px" : "10px")};
`;

//SLIDER

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: black;
  }

  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
`;

// CARDS

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.cart ? "row" : "column")};
  gap: 10px;
  
`;

export const CourseImage = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: cover;
  border-radius: 7px;
`;
