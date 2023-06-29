import { MenuWrapper } from "./BurgerMenu,styled";
import { useEffect,useContext } from "react";
import { NavMenu } from "../NavMenu/NavMenu";
import { ToggleContext } from "../Context/Context";


export const BurgerMenu: React.FC = () => {
  const { isMenuOpen } = useContext(ToggleContext);
      useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  return (
    <MenuWrapper>
      <NavMenu />
    </MenuWrapper>
  );
};
