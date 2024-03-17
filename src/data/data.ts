import illustrationOne from "../asserts/illustration-1.png";
import illustrationTwo from "../asserts/illustration-2.png";
import illustrationTree from "../asserts/illustration-3.png";

export type featuresType = {
  image: string;
  title: string;
  featureNumber: string;
  content: string;
};

export const features: featuresType[] = [
  {
    title: "Select Restaurant",
    content:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
    featureNumber: "01",
    image: illustrationOne,
  },
  {
    title: "Select Menu",
    content:
      "Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.",
    featureNumber: "02",
    image: illustrationTwo,
  },
  {
    title: "Wait For Delivery",
    content:
      "Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.",
    featureNumber: "03",
    image: illustrationTree,
  },
];
