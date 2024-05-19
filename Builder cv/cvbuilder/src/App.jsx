import { useState } from "react";

import "./App.css";
import ContactInfo from "./assets/components/ContactInfo";
import Header from "./assets/components/Header";
import Cvtheme from "./assets/components/Cvtheme";
function App() {
  const [name, setName] = useState("here");

  return (
    <>
      <div className="Main_wrap">
        <ContactInfo setName={setName} />
        <Cvtheme name={name} />
      </div>
    </>
  );
}

export default App;
