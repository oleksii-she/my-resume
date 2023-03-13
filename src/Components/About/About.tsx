import { Wrapper } from "./About.styled";
import { Container } from "../../Styles/container.styled";
import { cv } from "../../Images";
export const About: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <h2>About me</h2>
        <p>
          Hello, my name is Oleksii, I like front-end development, with the help
          of this site I want to show you my skills, yes, I know that I am still
          a young developer, but I am constantly learning and doing everything
          to overcome all the problems that occur on my way.
        </p>
        <p>
          I finished the courses at the educational GoIT and received a{" "}
          <a href={cv} target="_blank" rel="noreferrer">
            certificate
          </a>
          .
        </p>

        <p>
          I will be very happy to work with you and in your team, I love new
          acquaintances, I hope that you will help me gain more experience, and
          I will help you in your projects, at the moment I am open to
          cooperation in remote mode, but in the future I can move to your city
          to work from the office.
        </p>
      </Wrapper>
    </Container>
  );
};
