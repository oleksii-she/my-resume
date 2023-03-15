import FocusLock from "react-focus-lock";

import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  Wrapper,
  StyledModal,
  CloseButton,
  Content,
  Backdrop,
} from "./Modal.styled";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
}) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape" && isShown) {
        hide();
      }
    };

    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [hide, isShown]);

  const modal = (
    <React.Fragment>
      <FocusLock>
        <Backdrop onClick={hide} />
        <Wrapper aria-modal tabIndex={-1} role="dialog">
          <StyledModal>
            <CloseButton onClick={hide}>X</CloseButton>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
