import { Wrapper } from "./About.styled";
import { Container } from "../../Styles/container.styled";
import { cv } from "../../Images";
export const About: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <h2>About me</h2>
        <p>
          Hi there, my name is Oleksii and I am passionate about front-end
          development. I created this website to showcase my skills and
          abilities. While I am aware that I am a relatively new developer, I am
          always striving to learn and improve, tackling any challenges that
          come my way.
        </p>
        <p>
          I have completed the courses at GoIT, an educational institution, and
          have been awarded a certificate that confirms my successful completion
          of the program. Regenerate response{" "}
          <a href={cv} target="_blank" rel="noreferrer">
            certificate
          </a>
          .
        </p>

        <p>
          I would be delighted to collaborate with you and your team. I am
          always eager to meet new people and build meaningful connections. I
          hope to gain more experience working alongside you, while
          simultaneously contributing to your projects. Currently, I am
          available to work remotely, but in the future, I am open to relocating
          to your city to work in the office.
        </p>
      </Wrapper>
    </Container>
  );
};
