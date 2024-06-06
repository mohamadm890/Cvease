import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import ContactInfo from "./assets/components/ContactInfo";
import Header from "./assets/components/Header";
import Cvtheme from "./assets/components/Cvtheme";
import Experience from "./assets/components/Experience";
import Education from "./assets/components/Education";
import Skill from "./assets/components/Skill";
import Parent from "./assets/components/Parent";
import Summary from "./assets/components/Summary";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Hero from "./assets/components/Hero";
import Cv_test from "./assets/components/Cv";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Outfit", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div class="position">
          <Hero />
          <hr></hr>
        </div>
        <div
          className="Main_wrap"
          style={{
            display: "flex",
            backgroundColor: "#F9FAFB",
            paddingBottom: "500px",
            height: "100vh",
          }}
        >
          <div
            style={{
              flex: "none",
              width: "400px",
              height: "100%",
            }}
          >
            {" "}
            {/* Fixed width for Parent */}
            <Parent />
          </div>
          <div style={{ flex: 0.9 }}>
            <Cvtheme />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
