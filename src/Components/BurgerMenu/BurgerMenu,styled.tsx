import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.bg};
  

  padding: 66px 26px;
  padding-right: 160px;
`;
