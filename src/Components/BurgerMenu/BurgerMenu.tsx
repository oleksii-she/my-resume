import { MenuWrapper } from "./BurgerMenu,styled";
import { NavMenu } from "../NavMenu/NavMenu";

export const BurgerMenu: React.FC = () => {
  return (
    <MenuWrapper>
      <NavMenu />
    </MenuWrapper>
  );
};
