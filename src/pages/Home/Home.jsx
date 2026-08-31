import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";

import bannerHome from "../../assets/banner-home.png";
import logements from "../../data/logements.json";

import "./Home.scss";

function Home() {
  return (
    <>
      <Banner
        image={bannerHome}
        title="Chez vous, partout et ailleurs"
      />

      <section className="home__gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  );
}

export default Home;