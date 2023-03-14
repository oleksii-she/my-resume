import styled from "styled-components";
import { up } from "styled-breakpoints";

import { Github, Linkedin, Telegram } from "@styled-icons/simple-icons";

export const ContactsWrapper = styled.div`
  padding-top: 82px;
  padding-bottom: 80px;
  text-align: center;
  ${up("tablet")} {
    padding-top: 114px;
    padding-bottom: 111px;
  }

  h2 {
    font-size: 34px;
    line-height: calc(42 / 34);
    margin-bottom: 27px;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 39px;

    ${up("tablet")} {
      margin-bottom: 29px;
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
      padding: 12px 29px;
      margin-bottom: 50px;
    }
  }
`;

export const ContactsBox = styled.div`
  a {
    font-size: 18px;
    line-height: calc(22 / 18);
    letter-spacing: 0.02em;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.link};
      transition: ${({ theme }) => theme.btnHoverFocusScale};
      scale: ${({ theme }) => theme.btnHoverFocusScale};
    }
  }

  .icon__box {
    margin-top: 18px;
    display: flex;
    justify-content: center;

    column-gap: 40px;
  }

  .email__link {
    ${up("tablet")} {
      font-size: 22px;
      line-height: calc(20 / 22);

      margin-bottom: 50px;
    }

    margin-bottom: 32px;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 39px;
`;

export const GithubIcon = styled(Github)`
  width: 39px;
`;

export const TelegramIcon = styled(Telegram)`
  width: 39px;
`;
