import React, { createContext, useState, ReactNode } from "react";

export interface IMenuContex {
  isMenuOpen: boolean;
  toggleMenuMode: (toggleMenu: boolean) => void;
}

export const MenuContext = createContext<IMenuContex>({
  isMenuOpen: true,
  toggleMenuMode: () => {},
});
type Props = {
  children: ReactNode;
};

const NavState: React.FunctionComponent<Props> = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);

  function toggleMenuMode(): void {
    toggleMenu(!isMenuOpen);
  }
  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
};

export default NavState;
