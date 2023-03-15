import {
  WrapperSkills,
  SkillList,
  SkillBox,
  ReactLogoIcon,
  NodejsIconStyle,
  ReduxIconStyle,
  GithubIconStyle,
  JsIconStyle,
  HtmlIconStyle,
  FiletypeScssIconStyle,
  StyledcomponentsIconStyle,
  NextdotjsIconStyle,
  Css3IconStyle,
  StarRateIconStyle,
  StarRateSilverIconStyle,
  RatingList,
} from "./Skills.styled";

export const Skills: React.FC = () => {
  return (
    <WrapperSkills id="skills">
      <h2>Skills</h2>
      <p>My technical skills</p>

      <SkillList>
        <SkillBox>
          <JsIconStyle />
          <p>JS</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <ReactLogoIcon />
          <p>React</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <NodejsIconStyle />
          <p>Node JS</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <NextdotjsIconStyle />
          <p>Next JS</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <ReduxIconStyle /> <p>Redux</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <GithubIconStyle />
          <p>GitHub</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <HtmlIconStyle />
          <p>HTML</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <FiletypeScssIconStyle />
          <p>Sass</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <StyledcomponentsIconStyle />
          <p>Styled components</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
        <SkillBox>
          <Css3IconStyle />
          <p>Css</p>
          <RatingList>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
            <li>
              <StarRateSilverIconStyle />
            </li>
          </RatingList>
        </SkillBox>
      </SkillList>
    </WrapperSkills>
  );
};
