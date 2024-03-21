import { type featuresType } from "../data/data";
import RotateAnimation from "./Animations/RotateAnimation";

function Feature({ image, title, featureNumber, content }: featuresType) {
  return (
    <RotateAnimation classNames="mt-8 ">
      <img
        src={image}
        alt="how it works illustration one"
        className="mb-3 block mx-auto"
      />
      <p className="text-center">
        <span className="text-gray-400 text-4xl font-bold">
          {featureNumber}&nbsp;
        </span>
        <span className="text-2xl font-semibold">{title}</span>
      </p>
      <p className="text-slate-500 mt-4">{content}</p>
    </RotateAnimation>
  );
}

export default Feature;
