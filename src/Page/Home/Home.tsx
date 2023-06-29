import React from "react";
import { Container } from "../../Styles/container.styled";
import { Section, SectionNext } from "./Home.styled";
import { Hero } from "../../Components/Hero/Hero";
import { About } from "../../Components/About/About";
import { Skills } from "../../Components/Skills/Skills";
import { Portfolio } from "../../Components/Portfolio/Portfolio";
const Home: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>
      <SectionNext id="about-me">
        <About />
      </SectionNext>
      <Section>
        <Container>
          <Skills />
        </Container>
      </Section>
      <SectionNext id="portfolio">
        <Container>
          <Portfolio />
        </Container>
      </SectionNext>

    </>
  );
};

export default Home;
