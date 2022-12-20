import React from "react";
import {
  Container,
  SectionDesc,
  SectionHeading,
  SectionImage,
} from "../CommonStyles";
import {
  DetailSection,
  DetailsInfo,
  DetailsSection,
  LeftSection,
  RightSection,
  Wrapper,
} from "./Details.styles";
import Fade from "react-reveal/Fade";

const Details = () => {
  return (
    <Container bgColor=" #f7f7f7">
      <Wrapper>
        <DetailSection>
          <LeftSection>
            <SectionImage src="./assets/detail.jpg" alt="detail-image" />
          </LeftSection>
          <RightSection>
            <DetailsSection>
              <DetailsInfo>
                <SectionHeading>What We Excel In</SectionHeading>
                <SectionDesc>
                  Aliquam convallis quis mi id consequat. Morbi tellus massa,
                  viverra sed risus at, vulputate rhoncus elit. Maecenas at
                  consequat odio. Nunc sed urna sit amet erat mollis tempus ut
                  eu felis. Nam et tempor libero. Nunc elit purus, sodales ac
                  pretium sed, fermentum sit amet erat.
                </SectionDesc>
              </DetailsInfo>
            </DetailsSection>
          </RightSection>
        </DetailSection>
      </Wrapper>
    </Container>
  );
};

export default Details;
