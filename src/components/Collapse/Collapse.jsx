import { useState } from "react";
import arrowCollapse from "../../assets/arrow-collapse.svg";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <button
        className="collapse__header"
        type="button"
        onClick={toggleCollapse}
      >
        <span className="collapse__title">{title}</span>

        <img
  className="collapse__arrow"
  src={arrowCollapse}
  alt=""
  aria-hidden="true"
/>
      </button>

      <div className="collapse__content">
        <div className="collapse__content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;