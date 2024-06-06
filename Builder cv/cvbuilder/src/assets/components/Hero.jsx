import React from "react";
import Button from "@mui/material/Button";
import "./Hero.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import cveaseImage from "./cvease.svg";

function Hero(props) {
  return (
    <div className="Wrap_hero">
      <img src={cveaseImage} alt="CV Ease" className="logo" />
    </div>
  );
}

export default Hero;
