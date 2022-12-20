import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../CommonStyles";
import { CTAButton, CTATitle, Wrapper } from "./CTA.styles";
import Tada from "react-reveal/Tada";

const CTA = ({ CTAHeading, CTACall, to }) => {
  return (
    <Tada>
      <Container bgColor="#BCCEF8" borderRadius="20px">
        <Wrapper>
          <CTATitle>{CTAHeading}</CTATitle>
          <Link to={to}>
            <CTAButton>{CTACall}</CTAButton>
          </Link>
        </Wrapper>
      </Container>
    </Tada>
  );
};

export default CTA;
