import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
