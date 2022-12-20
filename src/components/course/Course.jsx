import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GetAllCoursesAPI } from "../../API/api";
import { CourseModalContext } from "../../App";
import Card from "../card/Card";
import { Container, SectionHeading } from "../CommonStyles";
import CourseModal from "../modal/display-course/CourseModal";
import {
  CardSection,
  CourseSlider,
  SliderSection,
  StyledSectionHeading,
  Wrapper,
} from "./Course.styles";
import { settings } from "./sliderSettings";

const Course = ({ heading ,catagory,popularCourses}) => {
  const { setCourseModalOpen ,setCourseModalData } = useContext(CourseModalContext);
  const [Courses,setCourses] = useState(null)

  const sendData = (course)=>{
  setCourseModalData(course)
  setCourseModalOpen((prev) => !prev)
  }
 
  useEffect(()=>{
    const GetAllCourses = async()=>{
      const res = await GetAllCoursesAPI(catagory)
      if(res.data.courses){
        setCourses(res.data.courses)
      }
    }
    GetAllCourses()
  },[ ])
  
  return (
    <Container bgColor=" #f7f7f7">
      <Wrapper>
        <StyledSectionHeading>{heading}</StyledSectionHeading>
        <SliderSection>
          <CourseSlider {...settings}>
            {Courses && Courses.map((course, index) => {
              return (
                <CardSection
                  onClick={()=>sendData(course)}
                  key={index}
                >
                  <Card
                    title={course.courseName} 
                    author={course.auther}
                    image={course.img}
                    rating={course.rating}
                    price={course.price}
                  />
                </CardSection>
              );
            })}
            {popularCourses && popularCourses.map((course, index) => {
              return (
                <CardSection
                  onClick={()=>sendData(course)}
                  key={index}
                >
                  <Card
                    title={course.courseName} 
                    author={course.auther}
                    image={course.img}
                    rating={course.rating}
                    price={course.price}
                  />
                </CardSection>
              );
            })}
          </CourseSlider>
        </SliderSection>
      </Wrapper>
    </Container>
  );
};

export default Course;
