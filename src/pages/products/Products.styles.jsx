import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-block: 50px;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
`;
export const RightSection = styled.div`
  flex: 1;
`;
export const InfoTitle = styled.h1`
  font-size: 40px;
`;
export const InfoDesc = styled.p``;
export const EnrollButton = styled.button`
  min-width: 200px;
  min-height: 40px;
  font-size: 16px;
  background-color: #0014ff;
  color: white;
  cursor: pointer;
  border-radius: 7px;
  outline: none;
  border: none;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
`;
export const DisplayImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
