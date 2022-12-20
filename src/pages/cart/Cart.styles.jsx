import styled from "styled-components";
import { SectionHeading } from "../../components/CommonStyles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  gap: 25px;
  padding-block: 50px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-block: 30px;
  }
`;

export const LeftSection = styled.div`
  flex: 2;
  min-height: 475px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 25px 15px;
  box-shadow: -1px -1px 22px -20px rgba(0, 0, 0, 0.75);
`;

export const CartHeading = styled(SectionHeading)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CourseListing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const RightSection = styled.div`
  flex: 1;
  max-height: 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 15px;
  box-shadow: -1px -1px 22px -20px rgba(0, 0, 0, 0.75);
`;
export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Total = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;
export const Amount = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 50px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  background-color: #0014ff;
  border: none;
  outline: none;
  border-radius: 7px;
  color: white;
  font-family: "Poppins", sans-serif;
`;

export const Line = styled.hr`
  width: 95%;
  opacity: 0.6;
`;
