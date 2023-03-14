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
    font-size: 24px;
    line-height: calc(33 / 24);
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    border-radius: 25px;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    flex-direction: column;

    row-gap: 50px;
  }
  p {
    font-size: 18px;
    line-height: calc(22 / 18);

    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
    :hover,
    :focus {
      transition: ${({ theme }) => theme.btnHoverFocusScale};
      scale: ${({ theme }) => theme.btnHoverFocusScale};
    }
  }

  .title__team {
    margin-top: 30px;
    margin-bottom: 22px;
  }
`;
