import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { theme } from "./Styles/theme";
import { GlobalStyle } from "./Styles/GlobalStyles";
import NavState from "./Components/Context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavState>
      <BrowserRouter basename="my-resume">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </NavState>
    <ToastContainer />
  </React.StrictMode>
);
