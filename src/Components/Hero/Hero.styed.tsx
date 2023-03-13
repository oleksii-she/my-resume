import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Wrapper = styled.div`
  padding-top: 65px;
  ${up("tablet")} {
    padding-top: 39px;
  }
  span {
    margin-top: 15px;
  }
  p {
    font-size: 18px;
    line-height: calc(22 / 18);
    margin-bottom: 36px;
    ${up("tablet")} {
      margin-bottom: 30px;
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 478px;
    ${up("tablet")} {
      width: 100%;
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: 47px;
  line-height: calc(58 / 47);

  ${up("tablet")} {
    font-size: 47px;
    line-height: calc(59 / 47);
  }
`;
