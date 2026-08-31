import "./Banner.scss";

function Banner({ image, title, overlayOpacity = 0.6 }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        "--overlay-opacity": overlayOpacity,
      }}
    >
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  );
}

export default Banner;