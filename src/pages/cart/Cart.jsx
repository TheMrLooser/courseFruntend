import { Alert, Collapse, IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BuyNewCourseAPI, GetAllCourseCartAPI, GetAllCoursesAddedInCartAPI, RemoveCourseFromCartAPI } from "../../API/api";
import { Authentication } from "../../App";
import Card from "../../components/card/Card";
import { Container } from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Amount,
  CartHeading,
  CheckoutButton,
  CourseListing,
  LeftSection,
  Line,
  RightSection,
  Total,
  TotalSection,
  Wrapper,
} from "./Cart.styles";

const Cart = () => {

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


  const {User} = useContext(Authentication)
  const [course,setCourse] = useState(null)
  const [totalPrice,setTotalPrice] = useState(0)
  useEffect(()=>{
    const calculateAmnt = async()=>{
        const res = await GetAllCourseCartAPI()
        setCourse(res.data.courses)
       
    }
    calculateAmnt()
  },[])

  useEffect(()=>{
    if(course != null){
      let price = 0 ,i=0;
      while(course.length > i){
        price = price +  course[i].price
        i++ 
      }
     setTotalPrice(price)
    }
  },[course])




  const Checkout = async ()=>{
    for(let i=0; course.length > i; i++){
      const res = await BuyNewCourseAPI(User.id,course[i].courseId)
      const removeResponce = await RemoveCourseFromCartAPI(course[i].courseId)
      console.log(res.data)
      console.log(removeResponce.data)
      if(res.data.error){
        return setAlert("error",res.data.message,true);
       }
       setAlert("success","New course is added in your bucket",true)
    }
  }
 
  return (
    <Container bgColor="#f7f7f7">
      <Header/>
      <Wrapper> 
        <LeftSection>
          <CartHeading>Shopping Cart</CartHeading>
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
          <CourseListing>
            {course && course.map((items, index) => { 
              return ( 
                <>
                  <Card
                    key={index}
                    cart="true"
                    title={items.courseName}
                    author={items.auther}
                    image={items.img}
                    rating={items.rating}
                    price={items.price}
                    courseId = {items.courseId}
                  />
                  <Line />
                </>
              );
            })}
          </CourseListing>
        </LeftSection>
        <RightSection>
          <TotalSection>
            <Total>Total: ({course ? course.length :0 } items)</Total>  
            <Amount>₹{totalPrice}</Amount>
          </TotalSection>
          <CheckoutButton onClick={Checkout}>Checkout</CheckoutButton>
        </RightSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
