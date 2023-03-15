import styled from "styled-components";
import { up } from "styled-breakpoints";
import { ReactComponent as Mail } from "../../Images/logo/Gmail_Logo.svg";
import { ReactComponent as Telegram } from "../../Images/logo/telegram.svg";
import { ReactComponent as Github } from "../../Images/logo/github.svg";
import { Linkedin } from "@styled-icons/simple-icons";
export const Wrapper = styled.div`
  padding-top: 65px;
  ${up("tablet")} {
    padding-top: 39px;
  }
  span {
    margin-top: 15px;
  }
  p {
    font-size: 18px;
    line-height: calc(22 / 18);
    margin-bottom: 36px;
    ${up("tablet")} {
      margin-bottom: 30px;
    }
  }
  img {
    object-fit: cover;
    width: 100%;

    border-radius: 25px;
    ${up("tablet")} {
      width: 100%;
      width: 100%;
    }
  }

  .wrapper__contacts {
    ${up("tablet")} {
      display: flex;
      justify-content: space-between;
    }
  }

  ul {
    /* display: flex;
    justify-content: center;
    column-gap: 15px;
    ${up("tablet")} {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    } */

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  li {
    :nth-child(2) {
      /* display: flex;
      width: -webkit-fill-available; */
      /* justify-content: space-around; */
      /* align-items: center; */
    }
  }

  a {
    font-size: 18px;
    line-height: calc(22 / 18);
    letter-spacing: 0.02em;
    display: flex;

    align-items: center;

    ${up("tablet")} {
      &:nth-child(1) {
        margin-bottom: 22px;
      }
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: 47px;
  line-height: calc(58 / 47);

  ${up("tablet")} {
    font-size: 47px;
    line-height: calc(59 / 47);
  }
`;

export const EmailIcom = styled(Mail)`
  width: 23px;
  height: 23px;
  margin-right: 8px;
`;

export const TelegramIcon = styled(Telegram)`
  width: 23px;
  height: 23px;
  margin-right: 8px;
`;
export const LinkedinIcon = styled(Linkedin)`
  width: 23px;
  height: 23px;
  margin-right: 8px;
  color: #0077b5;
`;

export const GithubIcon = styled(Github)`
  width: 23px;
  height: 23px;
  margin-right: 8px;
`;
