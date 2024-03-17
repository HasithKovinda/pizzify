import Feature from "../components/Feature";
import { features } from "../data/data";

function Works() {
  return (
    <section className="mt-28 px-14 md:max-w-screen-2xl mx-auto">
      <h1 className="heading">How It Works</h1>
      <p className="text-center text-lightGray">
        Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
        tellus in metus vulputate eu scelerisque felis.
      </p>

      <article className="md:flex md:items-center md:justify-between md:gap-10 mt-10">
        {features.map((feature, index) => {
          const { title, content, featureNumber, image } = feature;
          return (
            <Feature
              key={index}
              title={title}
              content={content}
              featureNumber={featureNumber}
              image={image}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Works;
