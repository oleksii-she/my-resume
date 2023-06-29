
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { ChevronUpCircle } from "@styled-icons/boxicons-solid/ChevronUpCircle";







export const Button = styled.button`
  background: transparent;
  border: none;
  position: fixed;
bottom: 10px;
right: 10px;
outline: none;
cursor: pointer;
  ${up("pc")} {
right: 12vw;
  }

`
export const IconUp = styled(ChevronUpCircle)`
  width: 80px;
  color: #131413;
  margin-bottom: 15px;

&:hover{

  width: 81px;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
`;
