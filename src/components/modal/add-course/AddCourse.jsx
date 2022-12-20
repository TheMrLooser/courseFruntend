import { yupResolver } from "@hookform/resolvers/yup";
import { CloseOutlined } from "@mui/icons-material";
import { InputLabel } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Line } from "../../../pages/cart/Cart.styles";
import {
  StyledInputField,
  TextAreaField,
  TextAreaSection,
} from "../../../pages/contact/Contact.styles";
import {
  GlobalStyles,
  SectionHeading,
  InputSection,
  Error,
  FormButton,
} from "../../CommonStyles";
import {
  AddCourseHeading,
  Box,
  closeStyles,
  DetailsWrap,
  Heading,
  Wrapper,
} from "./AddCourse.styles";
import { courseSchema } from "./courseSchema";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all", resolver: yupResolver() });

  const onSubmit = (d) => {
    alert(JSON.stringify(d));
    reset();
  };

  return (
    <Box>
      <GlobalStyles />
      <Wrapper>
        <Heading>
          <AddCourseHeading>Course Details</AddCourseHeading>
          <CloseOutlined sx={closeStyles} />
        </Heading>
        <Line />
        <DetailsWrap onSubmit={handleSubmit(onSubmit)}>
          <InputSection>
            <InputLabel>Title</InputLabel>
            <StyledInputField {...register("title")} type="text" />
            <Error>{errors.title?.message}</Error>
          </InputSection>
          <TextAreaSection>
            <InputLabel>Description</InputLabel>
            <TextAreaField {...register("description")} type="text" />
            <Error>{errors.description?.message}</Error>
          </TextAreaSection>
          <InputSection>
            <InputLabel>Image</InputLabel>
            <StyledInputField
              {...register("image")}
              type="file"
              accept="image/*"
            />
            <Error>{errors.image?.message}</Error>
          </InputSection>
          <FormButton type="submit">Upload</FormButton>
        </DetailsWrap>
      </Wrapper>
    </Box>
  );
};

export default AddCourse;
