import illustrationOne from "../asserts/illustration-1.png";
import illustrationTwo from "../asserts/illustration-2.png";
import illustrationTree from "../asserts/illustration-3.png";

import logoOne from "../asserts/logo-1.jpg";
import logoTwo from "../asserts/logo-2.jpg";
import logoTree from "../asserts/logo-3.jpg";

import pizzOne from "../asserts/pizza-1.jpg";
import pizzTwo from "../asserts/pizza-2.jpg";
import pizzTree from "../asserts/pizza-3.jpg";

export type featuresType = {
  image: string;
  title: string;
  featureNumber: string;
  content: string;
};

export type restaurantType = {
  title: string;
  image: string;
  subHeadings: string[];
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

export const restaurantData: restaurantType[] = [
  {
    title: "Kennington Lane Cafe",
    image: logoOne,
    subHeadings: ["american", "steakhouse", "seafood"],
    content:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    title: "The Wilmington",
    image: logoTwo,
    subHeadings: ["american", "steakhouse", "seafood"],
    content:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    title: "Kings Arms",
    image: logoTree,
    subHeadings: ["healthy", "steakhouse", "vegetarian"],
    content:
      "Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam donec adipiscing tristique.",
  },
];

export type serviceType = {
  image: string;
  title: string;
};

export const serviceData: serviceType[] = [
  {
    image: pizzOne,
    title: "With Quickeat you can order food for the whole day",
  },
  {
    image: pizzTwo,
    title: "127+ Couriers On Our Team!",
  },
  {
    image: pizzTree,
    title: "Why You Should Optimize Your Menu for Delivery",
  },
];
