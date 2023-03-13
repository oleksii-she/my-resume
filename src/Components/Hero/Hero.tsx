import { amTable, amMobile } from "../../Images";
import { Title, Wrapper } from "./Hero.styed";
import { useMatchMedia } from "../../Hooks/useMatchMedia";
export const Hero: React.FC = () => {
  const { isMobile }: any = useMatchMedia();
  return (
    <Wrapper>
      <Title>
        Oleksii <br /> Shevchenko
      </Title>
      <p>Front-end developer</p>
      <img src={isMobile ? amMobile : amTable} alt="my_photo" />
    </Wrapper>
  );
};
