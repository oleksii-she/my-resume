import styled from "styled-components";
import { up } from "styled-breakpoints";

export const SectionNext = styled.section`
  background-color: rgb(246, 246, 246);
  ${up("tablet")} {
    padding-bottom: 104px;
  }
`;

export const Section = styled.section`
  padding-bottom: 40px;

  ${up("tablet")} {
    padding-bottom: 104px;
  }
`;
