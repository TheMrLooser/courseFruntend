import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding-block: 30px;
`;

export const FooterWrap = styled.div`
  width: calc(100% - 40px);
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  padding-block: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: black;
  }
`;
export const MoreInfoHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
export const FollowSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FollowHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
`;

export const iconStyles = {
  width: "40px",
  height: "40px",
};

export const GetInTouch = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const GetInTouchHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
export const PhoneSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const PhoneLogo = styled.div``;
export const PhoneNumberSection = styled.div``;
export const PhoneNumberOne = styled.p``;
export const EmailSection = styled(PhoneSection)``;
export const EmailLogo = styled.div``;
export const EmailId = styled.p``;
export const CopyRightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CopyRightHeading = styled.p`
  text-align: center;
`;
