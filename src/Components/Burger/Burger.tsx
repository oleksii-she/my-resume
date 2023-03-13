import { StyledBurger } from "./Burger.styled";

interface Iprops {
  open: Boolean;
  setOpen: (toggleMenu: boolean) => void;
}

export const Burger: React.FC<Iprops> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
