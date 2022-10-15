import React, { useState } from "react";
import {
  Items,
  Links,
  Bars,
  Logoimg,
  Nav,
  NavMenu,
  Close
} from "./NavbarElements";
import { Logo, Bar, CloseT } from "../images";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <Bars src={Bar} alt="Hambuger menu " onClick={handleClick} />
        <Logoimg src={Logo} alt="Logo" />

        <NavMenu onClick={handleClick} click={click}>
          <Close
            src={CloseT}
            alt="close tag "
            onClick={handleClick}
            click={click}
          />

          <Items>
            <Links to="/">home</Links>
          </Items>
          <Items>
            <Links to="#">shop</Links>
          </Items>
          <Items>
            <Links to="#">about</Links>
          </Items>
          <Items>
            <Links to="#">contract</Links>
          </Items>
        </NavMenu>
      </Nav>
    </>
  );
}
