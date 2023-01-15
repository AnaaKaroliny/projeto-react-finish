import React from "react";
import { StyleFooter, IMG, H3, Contact } from "./style";

import github from "../Assets/github.png";
import gmail from "../Assets/gmail.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";

export default function Footer() {
  return (
    <StyleFooter>
      <>
        <H3>Contact:</H3>
      </>

      <div>
        <a href="#/">
          <IMG src={github} alt="" />
          <IMG src={gmail} alt="" />
          <IMG src={instagram} alt="" />
          <IMG src={linkedin} alt="" />
        </a>
      </div>
      <div>
        <Contact>Github.com/AnaaKaroliny</Contact>
        <Contact>anakaroliny.gomess@gmail.com</Contact>
        <Contact>@anakaroliny1</Contact>
        <Contact>@anakarolinydesouza</Contact>
      </div>
    </StyleFooter>
  );
}
