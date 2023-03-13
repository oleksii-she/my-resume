import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Wrapper = styled.div`
  ${up("tablet")} {
    padding-top: 35px;
  }
`;
