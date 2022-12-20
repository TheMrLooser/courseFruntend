import { CallMade } from "@mui/icons-material";
import React, { useEffect } from "react";
import {
  Container,
  Error,
  GlobalStyles,
  InputLabel,
  InputSection,
  PhoneError,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Break,
  ContactWrap,
  StyledFormButton,
  StyledHeading,
  StyledInputField,
  TextAreaField,
  TextAreaSection,
  Wrapper,
} from "./Contact.styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Pulse from "react-reveal/Pulse";
import { contactSchema } from "./contactSchema";

const Contact = () => {
  const {
    register: contact,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(contactSchema) });

  const onSubmitt = (d) => {
    alert(JSON.stringify(d));
    reset();
  };

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Pulse>
          <StyledHeading>
            Love to hear from you,
            <Break /> Get in touch👋
          </StyledHeading>
        </Pulse>
        <ContactWrap onSubmit={handleSubmit(onSubmitt)}>
          <InputSection>
            <InputLabel>Your name</InputLabel>
            <StyledInputField type="text" {...contact("name")} />
            <Error>{errors.name?.message}</Error>
          </InputSection>
          <InputSection>
            <InputLabel>Your email</InputLabel>
            <StyledInputField type="email" {...contact("email")} />
            <Error>{errors.email?.message}</Error>
          </InputSection>
          <InputSection>
            <InputLabel>Phone no.</InputLabel>
            <StyledInputField type="tel" {...contact("phone")} />
            <Error>{errors.phone?.message}</Error>
          </InputSection>
          <InputSection>
            <InputLabel>City</InputLabel>
            <StyledInputField type="text" {...contact("city")} />
            <Error>{errors.city?.message}</Error>
          </InputSection>
          <TextAreaSection>
            <InputLabel>Message</InputLabel>
            <TextAreaField row="8" {...contact("message")} />
            <Error>{errors.message?.message}</Error>
          </TextAreaSection>
          <StyledFormButton type="submit">
            Just Send
            <CallMade />
          </StyledFormButton>
        </ContactWrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Contact;
