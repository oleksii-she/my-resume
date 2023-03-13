import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  margin: auto;
  padding: 0 29.5px;
  max-width: 640px;
  ${up("tablet")} {
    max-width: 768px;
    padding: 0 50px;
  }
  ${up("pcSizeM")} {
    max-width: 1280px;
    padding: 0 140px;
  }
`;
