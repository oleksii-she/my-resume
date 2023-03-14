import styled from "styled-components";
import { up } from "styled-breakpoints";

export const WrapperDetalies = styled.div`
  padding-top: 43px;

  ${up("tablet")} {
    padding-top: 39;
  }
  h2 {
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 8px;
  }
  h3 {
    margin-bottom: 8px;
  }
  .pre__title {
    margin-bottom: 18px;
  }
  img {
    width: 100%;
    border-radius: 25px;
    margin-bottom: 20px;
    ${up("tablet")} {
      width: 640px;
      margin-bottom: 0;
    }
  }
  picture {
    ${up("tablet")} {
      margin-right: 30px;
    }
  }
  .detalies {
    ${up("tablet")} {
      display: flex;
    }
  }

  .description {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 15px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.primary};
      transition: ${({ theme }) => theme.btnHoverFocusScale};
      scale: ${({ theme }) => theme.btnHoverFocusScale};
    }
  }
`;
