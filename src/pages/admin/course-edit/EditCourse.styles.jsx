import styled from "styled-components";
import { StyledSectionHeading } from "../../../components/course/Course.styles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  margin-block: 50px;
`;

export const CourseWrap = styled.form`
  display: grid;
  grid-template-areas:
    "desc image"
    "desc tags"
    "video tags"
    "video buttons"
    "video buttons"
    "video buttons";
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-areas:
      "desc"
      "image"
      "tags"
      "video"
      "buttons";
  }
`;

export const Heading = styled(StyledSectionHeading)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LeftSection = styled.div`
  grid-area: desc;
`;

export const DescWrap = styled.div`
  border: 1px solid lightgrey;
  padding: 15px;
  border-radius: 12px;
`;

export const RightSection = styled.div`
  grid-area: tags;
`;

export const TagsWrap = styled.div`
  border: 1px solid lightgrey;
  padding: 15px;
  border-radius: 12px;
`;

export const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const PhotoSection = styled.div`
  grid-area: image;
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

export const ImageWrap = styled.div`
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 12px;
  display: flex;
  justify-content: flex-end;
`;

export const VideoSection = styled.div`
  grid-area: video;
`;

export const VideoWrap = styled.div`
  padding: 15px;
  border: 1px solid lightgrey;
  border-radius: 12px;
`;

export const ButtonSection = styled.div`
  grid-area: buttons;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const Discard = styled.button`
  width: max-content;
  min-height: 40px;
  background: green;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  outline: none;
  border: 1px solid lightgrey;
  cursor: pointer;
  
`;
export const AddProduct = styled(Discard)`
  background-color: #0014ff;
  color: white;
  border: none;
`;
