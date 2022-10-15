import React, { useState } from "react";

import {
  Container,
  Title,
  Content,
  FleshBox,
  FleshIcons,
  Footer,
  FooterImage,
  FContentContainer
} from "./HeroElement";
import { AngleLeft, AngleRight, Dark, Light } from "../images";
import { data } from "./data";
import Carousel from "./Carousel";

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  return (
    <>
      <Container>
        <Carousel
          src={data[slideIndex].src}
          srcSet={data[slideIndex].srcSet}
          title={data[slideIndex].title}
          contents={data[slideIndex].contents}
        />

        <FleshBox onClick={prevSlide} left>
          <FleshIcons src={AngleLeft} alt="leftside" />
        </FleshBox>
        <FleshBox onClick={nextSlide}>
          <FleshIcons src={AngleRight} alt="rightside" />
        </FleshBox>

        <Footer>
          <FooterImage src={Dark} alt="footer image1" />
          <FContentContainer>
            <Title SmallFont Padding Upper>
              About our furniture
            </Title>
            <Content PaddingCon Margin>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </Content>
          </FContentContainer>
          <FooterImage src={Light} alt="footer image2" />
        </Footer>
      </Container>
    </>
  );
}
