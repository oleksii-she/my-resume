import React from "react";
import { Container } from "../../Styles/container.styled";
import { Section, SectionNext, SectionPortfolio } from "./Home.styled";
import { Hero } from "../../Components/Hero/Hero";
import { About } from "../../Components/About/About";
import { Skills } from "../../Components/Skills/Skills";
import { Portfolio } from "../../Components/Portfolio/Portfolio";
import { Contacts } from "../../Components/Contacts/Contacts";
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
      {/* <Section id="contacts">
        <Container>
          <Contacts />
        </Container>
      </Section> */}
    </>
  );
};

export default Home;
