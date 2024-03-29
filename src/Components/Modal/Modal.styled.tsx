import styled from "styled-components";



export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
    opacity: 0;
     transition: opacity 8s ease-in-out;
  &.isHidden {
        opacity: 1;

  }




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
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
