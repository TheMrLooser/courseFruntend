import styled from "styled-components";
import { SectionHeading } from "../CommonStyles";

export const Wrapper = styled.div`
  width: calc(100% - 48px);
  border-radius: 20px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 16px;
  gap: 20px;
  text-align: center;
`;

export const CTATitle = styled(SectionHeading)`
  line-height: 1.4;
`;

export const CTAButton = styled.button`
  min-width: 200px;
  height: 45px;
  border-radius: 35px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  background-color: darkblue;
  color: white;
  font-family: "Poppins", sans-serif;
  margin-inline: auto;
  cursor: pointer;
`;
