import styled from "styled-components";
import { Author, Title } from "../../card/Card.styles";
import { Container } from "../../CommonStyles";
import { motion } from "framer-motion";

export const Box = styled(Container)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  top: 0;
  background-color: rgba(45, 45, 45, 0.4);
  backdrop-filter: blur(5px);
  font-family: "Poppins", sans-serif;
`;

export const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 999;
  bottom: 0;
  padding: 25px 20px;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const ModalWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 275px;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
`;
export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;

export const StyledTitle = styled(Title)`
  font-size: 20px;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const StyledAuthor = styled(Author)`
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const UpdatedDate = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  color: #0014ff;
  font-weight: 600;
`;

export const Break = styled.span`
  margin: 0;
  font-weight: 400;
`;

export const Desc = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
`;

export const CancelIconStyle = {
  marginLeft: "auto",
  marginTop: "-10px",
  marginRight: "-5px",
  cursor: "pointer",
};

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 10px;
`;
export const AddToCart = styled.button`
  width: 100%;
  height: 50px;
  background-color: #0014ff;
  color: white;
  outline: none;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;
export const BuyNow = styled(AddToCart)`
  outline: 2px solid black;
  background-color: transparent;
  color: black;
`;
