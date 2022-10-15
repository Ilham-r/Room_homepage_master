import styled from "styled-components";
import { Link } from "react-scroll";
export const Nav = styled.nav`
  display: flex;
  width: auto;
  z-index: 10;
  height: 100px;
  padding: 0 50px;
  align-items: center;
  position: absolute;
  justify-content: flex-start;
  @media screen and (max-width: 375px) {
    padding: 0 25px;
    z-index: 12;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 500;
  @media screen and (max-width: 375px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    background-color: hsl(0, 0%, 100%);
    margin-left: -30px;

    width: 375px;
    height: 120px;
    position: absolute;
    z-index: 15;
    ::after {
      content: "";
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      left: 0;
      top: 110px;
      z-index: 0;
    }
  }
`;
export const Items = styled.li`
  font-size: 1rem;
  margin: 0 1em;
  color: hsl(0, 0%, 100%);
  padding: 0.6em 0;
  :hover {
    border-bottom: 1.5px solid hsl(0, 0%, 100%);
  }
  @media screen and (max-width: 375px) {
    color: hsl(0, 0%, 0%);
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
export const Logoimg = styled.img`
  width: 62px;
  height: 14px;
  display: flex;
  @media screen and (max-width: 375px) {
    align-self: center;
    justify-self: center;
    margin-left: 130%;
  }
`;
export const Bars = styled.img`
  display: none;
  @media screen and (max-width: 375px) {
    width: 22px;
    width: 22px;
    display: flex;
    justify-self: flex-start;
  }
`;

export const Close = styled.img`
  display: none;
  @media screen and (max-width: 375px) {
    width: 15px;
    width: 15px;
    display: ${({ click }) => (click ? "flex" : "none")};
    justify-self: flex-start;
    margin: 0 40px 0 -40px;
    z-index: 1000;
  }
`;

