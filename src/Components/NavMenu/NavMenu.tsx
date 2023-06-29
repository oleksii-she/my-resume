import { useLocation } from "react-router-dom";
import { useContext,useEffect } from "react";
import { NavList, LinkNav } from "./NavMenu.styled";
import { ToggleContext } from "../Context/Context";

export const NavMenu: React.FC = () => {
  const location = useLocation();
  const { isMenuOpen, toggleMenuMode } = useContext(ToggleContext);


 
  const MobMenuLinkHandler = () => {
  
    if (isMenuOpen) {

      return toggleMenuMode(!isMenuOpen);
    }
    return;
  };

    useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      console.log('====================================');
      console.log('hidden');
      console.log('====================================');
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

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
