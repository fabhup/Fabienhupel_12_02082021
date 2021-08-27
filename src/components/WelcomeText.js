import "../styles/WelcomeText.css";
import PropTypes from "prop-types";

export default function WelcomeText({ firstName }) {
  return (
    <div className="welcome-text">
      <span className="welcome-text-header">
        {"Bonjour "}
        <strong>{firstName}</strong>
      </span>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

WelcomeText.propTypes = {
  firstName: PropTypes.string,
};