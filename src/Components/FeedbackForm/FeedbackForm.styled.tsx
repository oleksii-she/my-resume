import styled from "styled-components";
import { up } from "styled-breakpoints";
import { Form, Field, ErrorMessage } from "formik";
export const WrapperFeedback = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    font-size: 18px;
    line-height: 22px;

    font-weight: ${({ theme }) => theme.fontWeights[2]};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.active};
    border-radius: 50px;
    padding: 12px 87px;
    cursor: pointer;
    margin-bottom: 39px;
    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.link};
      transition: ${({ theme }) => theme.btnHoverFocusScale};
      scale: ${({ theme }) => theme.btnHoverFocusScale};
    }

    ${up("tablet")} {
      padding: 12px 89px;
    }
  }
  label {
    position: relative;
  }
`;
export const Input = styled(Field)`
  min-width: 280px;
  ${up("tablet")} {
    width: 320px;
  }
  &:nth-child(2) {
    margin-bottom: 30px;
  }
  padding: 12px 16px;

  border: 1px solid black;
  border-radius: 40px;

  :hover,
  :focus {
    border-color: black;
  }
  margin-bottom: 20px;
  outline: none;
`;

export const Textarea = styled(Field)`
  min-width: 280px;
  height: 120px;
  padding: 8px;
  margin-bottom: 25px;
  outline: none;
  resize: none;
  ${up("tablet")} {
    width: 450px;
    height: 150px;
    border: 1px solid black;
    border-radius: 18px;
    margin-bottom: 20px;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: 7px;
  left: 19px;
  color: red;
  font-size: 10px;
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  bottom: 19px;
  left: 19px;
  color: red;
  font-size: 10px;
  ${up("tablet")} {
    bottom: 15px;
  }
`;
