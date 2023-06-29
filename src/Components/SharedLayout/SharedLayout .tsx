import { Suspense } from "react";
import useScroll from "../../Hooks/useScroll";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Contacts } from "./../Contacts/Contacts";
import { Button,IconUp } from "./buttonUp.styled.";

export const SharedLayout: React.FC = () => {
  const isScrolled = useScroll()


const onClickTopUp = ()=>{
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}



  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
               {isScrolled && <Button onClick={onClickTopUp}><IconUp/></Button>} 
      </Suspense>

      <footer id="contacts">
        <Contacts />
      </footer>
    </>
  );
};
