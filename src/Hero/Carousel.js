import {
  ImageContainer,
  HeroImage,
  ContentContainer,
  Title,
  Content,
  ShowWrapp,
  ShowMore,
  ArrowIcon,
  CaroselContainer
} from "./HeroElement";
import { Arrow } from "../images";
export default function Carousel(props) {
  return (
    <>
      <CaroselContainer>
        <ImageContainer>
          <HeroImage src={props.src} srcSet={props.srcSet} alt="img" />
        </ImageContainer>
        <ContentContainer>
          <Title>{props.title}</Title>
          <Content>{props.contents}</Content>
          <ShowWrapp>
            <ShowMore to="#">Shop now</ShowMore>
            <ArrowIcon src={Arrow} alt="arrow" />
          </ShowWrapp>
        </ContentContainer>
      </CaroselContainer>
    </>
  );
}
