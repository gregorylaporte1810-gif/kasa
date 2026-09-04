import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <section className="error-page">
      <h1 className="error-page__code">404</h1>

      <p className="error-page__message">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link className="error-page__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;