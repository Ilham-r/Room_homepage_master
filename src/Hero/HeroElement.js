import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const CaroselContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: 65%;
  height: 100%;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0px 80px 0px 80px;
  justify-content: center;
  margin-top: -40px;
  @media screen and (max-width: 375px) {
    margin-top: 0px;
    width: 100%;
    padding: 0px;
  }
`;
export const Title = styled.h1`
  font-size: ${({ SmallFont }) => (SmallFont ? ".8rem" : "2.375rem")};
  font-weight: 700;
  text-transform: ${({ Upper }) => (Upper ? "uppercase" : "none")};
  padding: ${({ Padding }) => (Padding ? " 0 40px 0 40px" : "none")};
  @media screen and (max-width: 375px) {
    font-size: ${({ SmallFont }) => (SmallFont ? ".8rem" : "1.7rem")};
    padding: 40px 45px 0 45px;
  }
`;
export const Content = styled.p`
  color: hsl(0, 0%, 63%);

  margin-top: ${({ Margin }) => (Margin ? "0" : "-10px")};
  line-height: 1.4;
  padding: ${({ PaddingCon }) => (PaddingCon ? "0 40px 0 40px" : "none")};
  font-size: 0.87rem;
  @media screen and (max-width: 375px) {
    padding: 0 45px 20px 45px;
  }
`;
export const ShowMore = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 11px;
  color: hsl(0, 0%, 0%);
  font-weight: 600;
  text-transform: uppercase;
  :hover {
    color: hsl(0, 0%, 63%);
  }
  @media screen and (max-width: 375px) {
    padding: 0 40px 40px 40px;
  }
`;
export const ShowWrapp = styled.div`
  display: flex;
  justify-items: flex-start;
`;
export const ArrowIcon = styled.img`
  width: 35px;
  height: 10px;
  margin-left: 20px;
  @media screen and (max-width: 375px) {
    margin-left: -30px;
  }
`;
export const FleshBox = styled.div`
  width: 66px;
  height: 60px;
  position: absolute;
  display: flex;
  background-color: black;
  z-index: 12;
  right: ${({ left }) => (left ? "34.9%" : "30.1%")};
  top: 55.6%;
  cursor: pointer;
  :hover {
    background-color: hsl(0, 0%, 27%);
  }
  @media screen and (max-width: 375px) {
    width: 56px;
    height: 50px;
    top: 55.7%;
    right: ${({ left }) => (left ? "14.9%" : "0%")};
  }
`;
export const FleshIcons = styled.img`
  width: 15px;
  height: 15px;
  margin: auto;
`;
export const Footer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    margin-top: 170px;
    height: 100%;
  }
`;
export const FooterImage = styled.img`
  width: 30%;
  height: 100%;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
export const FContentContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 500px;
  }
`;
