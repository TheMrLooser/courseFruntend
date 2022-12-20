import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #f7f7f7;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 170px;
  }
`;

export const ImgWrap = styled.div``;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
