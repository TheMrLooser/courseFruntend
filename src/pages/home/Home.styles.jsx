import styled from "styled-components";
import { Container } from "../../components/CommonStyles";

export const Box = styled(Container)`
  position: relative;
  background-color: #f7f7f7;
`;

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-block: 50px;
`;
