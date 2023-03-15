// import styled from "styled-components";
// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1200;
//   visibility: hidden;
//   background: rgba(17, 17, 17, 0.6);
//   backdrop-filter: blur(10px);
//   transition: 0.5s;
//   &.isHidden {
//     opacity: 0;
//   }
//   &.show_modal {
//     opacity: 1;
//     visibility: visible;
//   }
// `;

// export const Modal = styled.div`
//   background: #ffffff;
//   box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
//   border-radius: 40px;
//   transform: scale(0.5);
//   transition: 0.4s all;
//   &.show {
//     transform: scale(1);
//     max-height: 90%;
//     overflow: auto;
//   }
//   &.show::-webkit-scrollbar {
//     display: none;
//   }
//   &.hidden {
//     transform: scale(0.5);
//     transition: 0.4s all;
//   }
// `;

import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  border-radius: 3px;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
