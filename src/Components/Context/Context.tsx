import React, { createContext, useState, ReactNode,useEffect } from "react";

export interface IMenuContex {
  isMenuOpen: boolean;
  toggleMenuMode: (toggleMenu: boolean) => void;

  isModalOpen: boolean;
  toggleModalMode: (toggleModal: boolean) => void;
}

export const ToggleContext = createContext<IMenuContex>({
  isMenuOpen: true,
  toggleMenuMode: () => {},
  isModalOpen: true,
  toggleModalMode: () => {},
});
type Props = {
  children: ReactNode;
};

const NavState: React.FunctionComponent<Props> = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const [isModalOpen, toggleModal] = useState<boolean>(false);


        useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  function toggleMenuMode(): void {
    toggleMenu(!isMenuOpen);
  }

  function toggleModalMode(): void {
    toggleModal(!isModalOpen);
  }
  return (
    <ToggleContext.Provider
      value={{ isMenuOpen, toggleMenuMode, isModalOpen, toggleModalMode }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default NavState;
