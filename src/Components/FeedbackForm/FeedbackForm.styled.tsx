import styled from "styled-components";
import { up } from "styled-breakpoints";

export const WrapperFeedback = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
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
  }

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
`;
export const Input = styled.input`
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
