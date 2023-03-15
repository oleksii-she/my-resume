import { amTable, amMobile } from "../../Images";
import { Title, Wrapper } from "./Hero.styed";

import { useMatchMedia } from "../../Hooks/useMatchMedia";
export const Hero: React.FC = () => {
  const { isMobile }: any = useMatchMedia();
  return (
    <Wrapper>
      <div className="wrapper__contacts">
        <Title>
          Oleksii <br /> Shevchenko
          <p>Front-end developer</p>
        </Title>
      </div>
      <img src={isMobile ? amMobile : amTable} alt="my_photo" />
    </Wrapper>
  );
};
