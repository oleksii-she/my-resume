import { useContext } from "react";
import { ToggleContext } from "../Context/Context";
import { useMatchMedia } from "../../Hooks/useMatchMedia";
import { NavMenu } from "../NavMenu/NavMenu";
import { Wrapper } from "./Header.styled";
import { BurgerMenu } from "./../BurgerMenu/BurgerMenu";
import { Container } from "../../Styles/container.styled";
import { Burger } from "../Burger/Burger";

export const Header: React.FC = () => {
  const { isMobile }: any = useMatchMedia();

  const { isMenuOpen, toggleMenuMode } = useContext(ToggleContext);

  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <Container>
      <Wrapper>
        {!isMobile ? (
          <NavMenu />
        ) : (
          <Burger open={isMenuOpen} setOpen={toggleMenuMode} />
        )}
      </Wrapper>
      {isMenuOpen && <BurgerMenu />}
    </Container>
  );
};
