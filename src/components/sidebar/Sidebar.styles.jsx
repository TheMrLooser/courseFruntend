import styled from "styled-components";
import { NavigationSection } from "../navigation/Navigation.styles";

export const Wrapper = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: lightgrey;
  z-index: 99;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const MenuWrap = styled.div`
  max-width: 155px;
  margin-inline: auto;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const StyledNavigation = styled(NavigationSection)`
  flex-direction: column;

  a {
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

export const MenuSection = styled.div``;
