import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./Components/SharedLayout/SharedLayout ";

const Home = lazy(() => import("./Page/Home/Home"));
const Portfolio = lazy(
  () => import("./Page/PortfolioDetalies/PortfolioDetalies")
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio/:id" element={<Portfolio />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
