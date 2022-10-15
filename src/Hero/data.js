import { Hero1, MHero1, Hero2, MHero2, Hero3, MHero3 } from "../images";

export const data = [
  {
    id: 1,
    src: Hero1,
    srcSet: ` ${MHero1} 375w, ${Hero1} 2000w,`,
    title: "Discover innovative ways to decorate",
    contents: `We provide unmatched quality, comfort, and style for property
      owners across the country. Our experts combine form and function
      in bringing your vision to life. Create a room in your own style
      with our collection and make your property a reflection of you and
      what you love.`
  },

  {
    id: 2,
    src: Hero2,
    srcSet: ` ${MHero2} 375w,${Hero2} 2000w,`,

    title: "We are available all across the globe ",
    contents: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
  },

  {
    id: 3,
    src: Hero3,
    srcSet: ` ${MHero3} 375w,${Hero3} 2000w,`,

    title: "Manufactured with the best materials ",
    contents: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
  }
];
