import styled from "styled-components";
import { up } from "styled-breakpoints";

import {
  ReactLogo,
  Nodejs,
  Redux,
  Github,
} from "@styled-icons/boxicons-logos/";
import { Js } from "@styled-icons/fa-brands";
import {
  Html5,
  Sass,
  Styledcomponents,
  Nextdotjs,
  Css3,
} from "@styled-icons/simple-icons";

import { StarRate } from "@styled-icons/material/StarRate";

// @styled-icons/material/StarRate

export const WrapperSkills = styled.div`
  padding-top: 81px;

  ${up("tablet")} {
    padding-top: 120px;
  }

  text-align: center;

  h2 {
    font-size: 34px;
    line-height: calc(42 / 34);
    margin-bottom: 50px;

    ${up("tablet")} {
      margin-bottom: 69px;
    }
  }

  p {
    font-size: 18px;
    line-height: calc(22 / 18);
    margin-bottom: 70px;

    ${up("tablet")} {
      margin-bottom: 69px;
    }
  }

  .swiper-wrapper {
    align-items: center;
    margin-right: 0;
  }

  .swiper-button-next {
    top: var(--swiper-navigation-top-offset, 25%);
    color: ${({ theme }) => theme.colors.secondary};
  }

  .swiper-button-prev {
    top: var(--swiper-navigation-top-offset, 25%);
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SkillBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 60px;

  span {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export const ReactLogoIcon = styled(ReactLogo)`
  width: 180px;
  color: #61dbfb;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const NodejsIconStyle = styled(Nodejs)`
  width: 180px;
  color: #68a063;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const ReduxIconStyle = styled(Redux)`
  width: 180px;
  color: #764abc;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const GithubIconStyle = styled(Github)`
  width: 180px;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const JsIconStyle = styled(Js)`
  width: 180px;
  color: #f0db4f;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const HtmlIconStyle = styled(Html5)`
  width: 180px;
  color: rgb(228, 77, 38);
  ${up("tablet")} {
    width: 80px;
  }
`;

export const FiletypeScssIconStyle = styled(Sass)`
  width: 180px;
  color: #cd6799;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const StyledcomponentsIconStyle = styled(Styledcomponents)`
  width: 180px;
  color: yellow;
  stroke: #cd6799;
  ${up("tablet")} {
    width: 80px;
  }
`;
export const NextdotjsIconStyle = styled(Nextdotjs)`
  width: 180px;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const Css3IconStyle = styled(Css3)`
  width: 180px;
  color: #2d20e3;
  ${up("tablet")} {
    width: 80px;
  }
`;

export const StarRateIconStyle = styled(StarRate)`
  width: 26px;
  color: #000000;
`;

export const StarRateSilverIconStyle = styled(StarRate)`
  width: 26px;
  color: #e5e5e5;
`;

export const RatingList = styled.ul`
  display: flex;
  li {
    margin-right: 9px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
