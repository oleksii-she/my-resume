import styled from "styled-components";
import { up } from "styled-breakpoints";
import { HashLink } from "react-router-hash-link";
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  ${up("tablet")} {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    border-bottom: 1px solid #828282;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  li {
    margin-bottom: 68px;

    &:last-child {
      margin-bottom: 0;
    }

    ${up("tablet")} {
      margin-bottom: 37px;
    }
  }
`;

export const LinkNav = styled(HashLink)`
  font-size: 34px;
  line-height: calc(42 / 34);

  color: ${({ theme }) => theme.colors.link};
  outline: none;

  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.active};
    transition: ${({ theme }) => theme.btnAnimationTransition};
    scale: ${({ theme }) => theme.btnHoverFocusScale};
  }
  ${up("tablet")} {
    font-family: ${({ theme }) => theme.fonts[1]};
    font-size: 18px;
    line-height: calc(22 / 18);
    font-weight: ${({ theme }) => theme.fontWeights[0]};

    &.active {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;
