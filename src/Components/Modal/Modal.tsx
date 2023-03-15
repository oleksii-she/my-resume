import FocusLock from "react-focus-lock";
import React, { FunctionComponent, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { ToggleContext } from "../Context/Context";
import {
  Wrapper,
  StyledModal,
  CloseButton,
  Content,
  Backdrop,
} from "./Modal.styled";

export interface ModalProps {
  modalContent: JSX.Element;
}

export const Modal: FunctionComponent<ModalProps> = ({ modalContent }) => {
  const { isModalOpen, toggleModalMode } = useContext(ToggleContext);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape" && isModalOpen) {
        toggleModalMode(!isModalOpen);
      }
    };

    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isModalOpen, toggleModalMode]);

  const modal = (
    <React.Fragment>
      <FocusLock>
        <Backdrop onClick={() => toggleModalMode(!isModalOpen)} />
        <Wrapper aria-modal tabIndex={-1} role="dialog">
          <StyledModal>
            <CloseButton onClick={() => toggleModalMode(!isModalOpen)}>
              X
            </CloseButton>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isModalOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
