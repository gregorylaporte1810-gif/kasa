import { useParams } from "react-router-dom";

import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import logements from "../../data/logements.json";

import "./Housing.scss";

function Housing() {
  const { id } = useParams();

  const logement = logements.find(
    (logement) => logement.id === id
  );

  if (!logement) {
    return null;
  }

  return (
    <section className="housing">
      <Slideshow pictures={logement.pictures} />
    </section>
  );
}

export default Housing;