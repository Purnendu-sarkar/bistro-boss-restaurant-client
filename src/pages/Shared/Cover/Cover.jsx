import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-100}
    >
      <div className="hero h-[300px] md:h-[500px] lg:h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white py-10 px-4 md:py-20 md:px-10 md:bg-[rgba(21,21,21,0.6)] md:w-[800px]">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5">
              Discover the most innovative and visually stunning designs for
              your needs. Let us help you bring your vision to life with a touch
              of excellence.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
