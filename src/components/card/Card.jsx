import React from "react";
import { Cards, CourseImage, GlobalStyles } from "../CommonStyles";
import {
  Author,
  ButtonSection,
  CourseDemoGraphic,
  CourseDetails,
  DeleteButton,
  DetailSection,
  ImageSection,
  Price,
  PriceSection,
  Title,
  Wrapper,
} from "./Card.styles";
import Rating from "@mui/material/Rating";
import { Skeleton } from "@mui/material";
import { RemoveCourseFromCartAPI } from "../../API/api";

const Card = ({ title, author, image, cart, rating, price, courseId }) => {
  const RemoveCourse = async () => {
    await RemoveCourseFromCartAPI(courseId)
    window.location.reload()
  }
  

  return (
    <Wrapper>
      <GlobalStyles />
      {image ? (
        <Cards cart={cart} key={courseId}>
          <ImageSection>
            <CourseImage cart={cart} src={image} alt="course_img" />
          </ImageSection>
          <DetailSection>
            <CourseDetails cart={cart}>
              <CourseDemoGraphic>
                <Title cart={cart}>{title}</Title>
                <Author cart={cart}>{author}</Author>
                <Rating value={rating} size="small" readOnly />
              </CourseDemoGraphic>
              <PriceSection>
                <Price cart={cart}>₹{price}</Price>
              </PriceSection>
            </CourseDetails>
            {cart==="true" ? (
              <ButtonSection>
                <DeleteButton onClick={RemoveCourse}>Delete</DeleteButton>
              </ButtonSection>
            ) : null}
          </DetailSection>
        </Cards>
      ) : (
        <Cards>
          <Skeleton
            variant="rectangular"
            height={160}
            sx={{ borderRadius: "15px" }}
          />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width={40} />
        </Cards>
      )}
    </Wrapper>
  );
};

export default Card;
