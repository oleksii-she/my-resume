import styled from "styled-components";
interface Iopen {
  open: Boolean;
}

export const StyledBurger = styled.div`
  position: relative;
  top: 68px;
  right: 0;
  left: 90%;
  height: 20px;
  width: 30px;
  z-index: 999;
  span {
    position: absolute;
    width: 100%;
    height: 3px;
    top: 50%;
    left: 0;
    display: block;
    background: ${({ theme }) => theme.colors.active};
    transition: 0.5s;
    opacity: ${({ open }) => (!open ? "1" : "0")};
  }

  &:hover {
    cursor: pointer;
  }
  span:first-child {
    transform: ${({ open }: Iopen) =>
      !open ? "rotate(0deg)" : "rotate(405deg)"};
    top: ${({ open }) => (!open ? "16px" : "50%")};
    opacity: ${({ open }) => (!open ? "1" : "1")};
  }
  span:last-child {
    opacity: ${({ open }) => (!open ? "1" : "1")};
    top: ${({ open }) => (!open ? "3px" : "50%")};
    transform: ${({ open }) => (!open ? "rotate(0deg)" : "rotate(-405deg)")};
  }
`;
