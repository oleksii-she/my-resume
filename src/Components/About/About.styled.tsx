import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Wrapper = styled.div`
  padding-top: 81px;

  ${up("tablet")} {
    padding-top: 120px;
  }

  text-align: center;
  h2 {
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 30px;
    ${up("tablet")} {
      font-size: 34px;
      line-height: 42px;
    }
  }

  p {
    font-size: 18px;
    line-height: calc(22 / 18);
    margin-bottom: 50px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
