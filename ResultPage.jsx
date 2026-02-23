
 import { useLocation, useNavigate } from "react-router-dom";

import underweightImg from "./underweight.png";
import normalImg from "./normal.png";
import overweightImg from "./overweight.png";
import obeseImg from "./obese.png";
import "./App.css";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <h2>No Data Found</h2>;
  }

  const { name, bmi, status } = location.state;

  const images = {
    Underweight: underweightImg,
    Normal: normalImg,
    Overweight: overweightImg,
    Obese: obeseImg,
  };

  return (
    <div className="container">
      <div className="result-box">

        <h2>{name}'s BMI Result</h2>

        <p className="bmi-value">BMI: {bmi}</p>

        <p className="status-text">{status}</p>

        <img
          src={images[status]}
          alt={status}
          className="result-image"
        />

        <button onClick={() => navigate("/")}>
          Calculate Again
        </button>

      </div>
    </div>
  );
}

export default ResultPage;
