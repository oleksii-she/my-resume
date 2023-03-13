import React, { useRef, useEffect } from "react";
import { Container } from "../../Styles/container.styled";
import { Section, SectionNext } from "./Home.styled";
import { Hero } from "../../Components/Hero/Hero";
import { About } from "../../Components/About/About";
import { Skills } from "../../Components/Skills/Skills";
import { Portfolio } from "../../Components/Portfolio/Portfolio";
import { useParams } from "react-router-dom";
const Home: React.FC = () => {
  // const params = useParams();
  // const blocks = {
  //   block1: useRef(null),
  //   block2: useRef(null),
  // };

  // const scrollToBlock = (block = "") => {
  //   if (block in blocks) {
  //     blocks[block].current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   scrollToBlock(params.block);
  // }, [params]);

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
      <SectionNext>
        <Container>
          <Portfolio />
        </Container>
      </SectionNext>
    </>
  );
};

export default Home;
