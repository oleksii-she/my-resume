import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { NavList, LinkNav } from "./NavMenu.styled";
import { MenuContext } from "../Context/MobMenuContext";

export const NavMenu: React.FC = () => {
  const location = useLocation();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const MobMenuLinkHandler = () => {
    if (isMenuOpen) {
      return toggleMenuMode(!isMenuOpen);
    }
    return;
  };

  return (
    <nav>
      <NavList>
        <li>
          <LinkNav
            to="/"
            className={location.hash === "#home" ? "active" : ""}
            onClick={() => MobMenuLinkHandler()}
            smooth
          >
            Home
          </LinkNav>
        </li>
        <li>
          <LinkNav
            to="/#about-me"
            className={location.hash === "#about-me" ? "active" : ""}
            onClick={() => MobMenuLinkHandler()}
            smooth
          >
            About me
          </LinkNav>
        </li>

        <li>
          <LinkNav
            to="/#skills"
            className={location.hash === "#skills" ? "active" : ""}
            onClick={() => MobMenuLinkHandler()}
            smooth
          >
            Skills
          </LinkNav>
        </li>
        <li>
          <LinkNav
            to="/#portfolio"
            className={location.hash === "#portfolio" ? "active" : ""}
            onClick={() => MobMenuLinkHandler()}
            smooth
          >
            Portfolio
          </LinkNav>
        </li>
        <li>
          <LinkNav
            to="/#contacts"
            className={location.hash === "#contacts" ? "active" : ""}
            onClick={() => MobMenuLinkHandler()}
            smooth
          >
            Contacts
          </LinkNav>
        </li>
      </NavList>
    </nav>
  );
};
