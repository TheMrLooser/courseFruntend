import { CloseOutlined } from "@mui/icons-material";
import { Alert, Collapse, IconButton, Skeleton } from "@mui/material";
import React, { useContext, useState } from "react";
import { AddToCartAPI } from "../../../API/api";
import { Authentication, CourseModalContext } from "../../../App";
import { checkoutHandler } from "../../../helper/paymentGateway";
import { GlobalStyles } from "../../CommonStyles";

import {
  Box,
  ModalWrap,
  StyledTitle,
  StyledAuthor,
  Wrapper,
  Break,
  UpdatedDate,
  Desc,
  CancelIconStyle,
  ButtonSection,
  AddToCart,
  BuyNow,
  Description,
  ImageSection,
  CourseImage,
} from "./CourseModal.styles";

const CourseModal = () => {
//Alert section
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertText, setAlertText] = useState("Somthing");
  const [alertType, setAlertType] = useState("success");

  const setAlert = (type,text,status)=>{
    setAlertType(type)
    setAlertText(text)
    setAlertOpen(status)
  }

  if(alertOpen){
    setTimeout(() => {
      setAlertOpen(false)
    }, 10000);
  }

  const { setCourseModalOpen ,courseModalData } = useContext(CourseModalContext);
  const {User} = useContext(Authentication)
  const addTocart = async (data)=>{
    const res = await AddToCartAPI(data ,User.id)
    if(res.data.error){
      return setAlert("error",res.data.message,true);
     }
     setAlert("success",res.data.message,true)
  }
  return (
    <Box>
      <GlobalStyles />
      <Wrapper>
        <CloseOutlined
          sx={CancelIconStyle} 
          onClick={() => setCourseModalOpen((prev) => !prev)}
        />
        {true ? (
          <ModalWrap>
            <ImageSection>
              <CourseImage src={courseModalData.img} />
            </ImageSection>
            <Description>
              <StyledTitle>
                <Collapse in={alertOpen}> 
                  <Alert    
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setAlertOpen(true);
                        }}
                      >
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                    severity={alertType}
                  >
                  {alertText}
                  </Alert>
                </Collapse>
                {courseModalData.courseName}

              </StyledTitle>
              <StyledAuthor>
                Created by: {courseModalData.auther}
              </StyledAuthor>
              <UpdatedDate>
                <Break>Updated: </Break> { courseModalData.updatedAt}
              </UpdatedDate>
              <Desc>
                { courseModalData.description}
              </Desc>
              <ButtonSection>
                <AddToCart onClick={()=>addTocart(courseModalData)}>Add to cart</AddToCart>
                <BuyNow onClick={() => checkoutHandler(768)}>Buy now</BuyNow>
              </ButtonSection>
            </Description>
          </ModalWrap>
        ) : (
          <>
            <Skeleton variant="rectangular" height={150} width={300} />
            <Skeleton variant="text" width={300} height={50} />
            <Skeleton variant="text" width={300} height={50} />
          </>
        )}
      </Wrapper>
    </Box>
  );
};

export default CourseModal;
