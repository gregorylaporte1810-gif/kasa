import { useParams } from "react-router-dom";

import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";

import logements from "../../data/logements.json";

import "./Housing.scss";

function Housing() {
  const { id } = useParams();

  const logement = logements.find(
    (logement) => logement.id === id
  );

  // On gérera ce cas correctement à l'étape 9.
  if (!logement) {
    return null;
  }

  const rating = Number(logement.rating);

  return (
    <section className="housing">
      <Slideshow pictures={logement.pictures} />

      <div className="housing__summary">
        <div className="housing__main-info">
          <h1 className="housing__title">
            {logement.title}
          </h1>

          <p className="housing__location">
            {logement.location}
          </p>

          <div className="housing__tags">
            {logement.tags.map((tag) => (
              <span
                className="housing__tag"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="housing__aside">
          <div className="housing__host">
            <p className="housing__host-name">
              {logement.host.name}
            </p>

            <img
              className="housing__host-picture"
              src={logement.host.picture}
              alt={`Portrait de ${logement.host.name}`}
            />
          </div>

          <div
            className="housing__rating"
            aria-label={`Note : ${rating} sur 5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= rating
                    ? "housing__star housing__star--active"
                    : "housing__star"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="housing__details">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="housing__equipments">
            {logement.equipments.map((equipment) => (
              <li key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}

export default Housing;