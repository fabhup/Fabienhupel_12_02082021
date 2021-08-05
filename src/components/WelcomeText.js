
import "../styles/WelcomeText.css";

export default function WelcomeText({firstName}) {
    return <div className="welcome-text">
        <span className="welcome-text-header">
            {"Bonjour "}
            <strong>
                {firstName}
            </strong>
        </span>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
}