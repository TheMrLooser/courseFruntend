import React, { useContext, useEffect, useState } from "react";
import { BuyNewCourseAPI, GetAllBuyedCourseAPI, GetAllCoursesAddedInCartAPI } from "../../API/api";
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

const BuyedCourses = () => {
  const {User} = useContext(Authentication)
  const [courses,setCourses] = useState()
  useEffect(()=>{
        const getCourses = async()=>{
          let course =[]
          for(let i = 0; User.course.length>i;i++){
            const res = await GetAllBuyedCourseAPI(User.course[i])
            if(!res.data.error){
              course.push(res.data)
            }
          }
          setCourses(course)
        }
        getCourses()
  },[User])

  

  return (
    <Container bgColor="#f7f7f7">
      <Header/>
      <Wrapper>
        <LeftSection>
          <CartHeading>My Courses</CartHeading>
          <CourseListing>
            {courses && courses.map((items, index) => { 
              return ( 
                <>
                  <Card
                    key={index}
                    cart="false"
                    title={items.course.courseName}
                    author={items.course.auther}
                    image={items.course.img}
                    rating={items.course.rating}
                    price={items.course.price}
                    courseId = {items.course.courseId}
                  />
                  <Line />
                </>
              );
            })}
          </CourseListing>
        </LeftSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default BuyedCourses;
