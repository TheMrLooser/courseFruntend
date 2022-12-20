import styled from "styled-components";
import { Line } from "../../../pages/cart/Cart.styles";
import { Container, FormButton } from "../../CommonStyles";

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

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 999;
  bottom: 0;
  padding: 20px;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddCourseHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const DetailsWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const closeStyles = {
  cursor: "pointer",
};
