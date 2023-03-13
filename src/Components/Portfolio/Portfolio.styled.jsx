import styled from "styled-components";
import { up } from "styled-breakpoints";

export const WrapperPortfolio = styled.div`
  padding-top: 81px;

  ${up("tablet")} {
    padding-top: 120px;
  }

  text-align: center;
  h2 {
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 64px;
    ${up("tablet")} {
      margin-bottom: 47px;
      font-size: 34px;
      line-height: 42px;
    }
  }

  h3 {
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 15px;
    ${up("tablet")} {
      font-size: 34px;
      line-height: 42px;
    }

    div {
      border: 1px black;
    }
  }
  img {
    width: 100%;
    border-radius: 25px;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    line-height: calc(22 / 18);
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
