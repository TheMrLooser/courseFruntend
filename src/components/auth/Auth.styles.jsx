import styled from "styled-components";
import { SectionHeading } from "../CommonStyles";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #0d4c92;
`;

export const LoginWrap = styled.div`
  width: min(820px, calc(100% - 20px));
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -1px 2px 15px -10px rgba(0, 0, 0, 0.75);
  background: white;
`;

export const IllustrationSection = styled.div`
  flex: 1;
  background-color: #00abb3;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IllustrationImage = styled.img`
  max-width: 400px;
  min-height: 500px;
  object-fit: contain;
`;

export const CredentialSection = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
export const LoginSection = styled.form`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding-block: 30px;
`;
export const HeadingSection = styled.div``;
export const Heading = styled(SectionHeading)`
  line-height: 0.2;
`;
export const CredentialDetails = styled.div`
  max-width: 330px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
`;

export const NoticeSection = styled.div`
  text-align: center;
  margin-top: -5px;
`;
export const Notice = styled.p``;
export const Break = styled.span`
  a {
    color: darkblue;
  }
`;
