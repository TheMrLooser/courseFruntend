import styled from "styled-components";

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  gap: 35px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: hsl(220, 9%, 35%);

    @media (max-width: 992px) {
      display: ${(props) => (props.visible === "visible" ? "flex" : "none")};
    }
  }

  a.active {
    font-weight: 700;
    color: black;
  }
`;

export const LinkSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
