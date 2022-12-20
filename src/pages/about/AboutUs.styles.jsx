import styled from "styled-components";
import {
  Container,
  CourseImage,
  SectionHeading,
} from "../../components/CommonStyles";

export const Box = styled(Container)`
  background-color: #f7f7f7;
`;

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-block: 50px;
`;

export const OverViewSection = styled.div``;

export const TeamSection = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
`;

export const TeamHeading = styled(SectionHeading)`
  max-width: 410px;
  min-height: 110px;
  line-height: 1;
  overflow-y: hidden;
`;

export const TeamDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;
export const TeamCard = styled.div`
  width: 300px;
  background-color: white;
  display: grid;
  place-items: center;
  padding: 15px;
  border-radius: 15px;
  box-shadow: -1px -1px 20px -14px rgba(0, 0, 0, 0.75);
`;

export const CourseImageSection = styled.div`
  width: 100%;
`;

export const TeamDesc = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 0;
`;
export const Designation = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
`;

export const RegisterNowSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.5;
`;

export const BenefitSection = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Benefit = styled.div`
  display: flex;
  gap: 5px;
`;
export const BenefitLogo = styled.div``;
export const BenefitDesc = styled.div``;
export const RegisterButton = styled.button`
  min-width: 170px;
  min-height: 50px;
  background-color: black;
  outline: none;
  border: none;
  border-radius: 30px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bolder;
  box-shadow: 1px 2px 20px -1px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
`;

export const WrapSectionImage = styled.div``;
