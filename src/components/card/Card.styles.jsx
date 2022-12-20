import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const DetailSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImageSection = styled.div``;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

export const CourseDemoGraphic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Author = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  @media (max-width: 600px) {
    display: ${(props) => (props.cart ? "none" : "-webkit-box")};
  }
`;

export const PriceSection = styled.div``;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${(props) => (props.cart ? "#487bb6" : "black")};
`;

export const ButtonSection = styled.div``;
export const DeleteButton = styled.button`
  width: max-content;
  padding: 5px;
  background-color: red;
  color: white;
  outline: none;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;
