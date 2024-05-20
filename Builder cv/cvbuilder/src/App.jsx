import { useState } from "react";

import "./App.css";
import ContactInfo from "./assets/components/ContactInfo";
import Header from "./assets/components/Header";
import Cvtheme from "./assets/components/Cvtheme";
import Experience from "./assets/components/Experience";
import Education from "./assets/components/Education";
import Skill from "./assets/components/Skill";
import Summary from "./assets/components/Summary";
import Parent from "./assets/components/Parent";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Outfit", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Main_wrap" style={{ display: "flex" }}>
          <div style={{ flex: "none", width: "450px" }}>
            {" "}
            {/* Fixed width for Parent */}
            <Parent />
          </div>
          <div style={{ flex: 1 }}>
            <Cvtheme />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
