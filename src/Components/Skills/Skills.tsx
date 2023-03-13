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
          <NextdotjsIconStyle />
          <p>Next JS</p>
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

// import {
//   WrapperSkills,
//   SkillBox,
//   ReactLogoIcon,
//   NodejsIconStyle,
//   ReduxIconStyle,
//   GithubIconStyle,
//   JsIconStyle,
//   HtmlIconStyle,
//   FiletypeScssIconStyle,
//   StyledcomponentsIconStyle,
//   NextdotjsIconStyle,
//   Css3IconStyle,
//   StarRateIconStyle,
//   StarRateSilverIconStyle,
//   RatingList,
// } from "./Skills.styled";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useMatchMedia } from "../../Hooks/useMatchMedia";
// // ReactLogoIcon
// export const Skills: React.FC = () => {
//   const { isMobile, isTablet }: any = useMatchMedia();

//   const MatchMediaSlider = (): any => {
//     if (isMobile) {
//       return 1;
//     }
//     if (isTablet) {
//       return 3;
//     }
//     return 4;
//   };

//   const slidesPerView = MatchMediaSlider();
//   return (
//     <WrapperSkills id="skills">
//       <h2>Skills</h2>
//       <p>My technical skills</p>

//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={22}
//         slidesPerView={slidesPerView}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => swiper}
//       >
//         <SwiperSlide>
//           <SkillBox>
//             <JsIconStyle />
//             <span>JS</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <ReactLogoIcon />
//             <span>React</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <NodejsIconStyle />
//             <span>Node JS</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <NextdotjsIconStyle />
//             <span>Next JS</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <ReduxIconStyle /> <span>Redux</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <GithubIconStyle />
//             <span>GitHub</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <HtmlIconStyle />
//             <span>HTML</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <FiletypeScssIconStyle />
//             <span>Sass</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <StyledcomponentsIconStyle />
//             <span>Styled components</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//         <SwiperSlide>
//           <SkillBox>
//             <Css3IconStyle />
//             <span>Css</span>
//             <RatingList>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//               <li>
//                 <StarRateSilverIconStyle />
//               </li>
//             </RatingList>
//           </SkillBox>
//         </SwiperSlide>
//       </Swiper>
//     </WrapperSkills>
//   );
// };
