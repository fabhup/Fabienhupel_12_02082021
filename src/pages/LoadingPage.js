import "../styles/LoadingPage.css";
import loadspinner from "../assets/loading.gif";

function LoadingPage() {
  return (
    <div className="loading-page">
      <img src={loadspinner} alt="loading..."></img>
    </div>
  );
}

export default LoadingPage;
