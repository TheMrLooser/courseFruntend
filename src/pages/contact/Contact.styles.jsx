import styled from "styled-components";
import {
  FormButton,
  InputField,
  SectionHeading,
} from "../../components/CommonStyles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  padding-block: 50px;
`;

export const StyledHeading = styled(SectionHeading)`
  line-height: 1.2;
`;

export const StyledInputField = styled(InputField)`
  max-width: 100%;
`;

export const ContactWrap = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 0 30px;

  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: auto;
  }
`;

export const Break = styled.br``;

export const TextAreaSection = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const TextAreaField = styled.textarea`
  height: 100px;
  outline: none;
  border-radius: 7px;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid darkgray;
  padding: 5px 10px;
  resize: none;
`;

export const StyledFormButton = styled(FormButton)`
  max-width: 330px;
  min-height: 50px;
  margin-top: 20px;
`;
