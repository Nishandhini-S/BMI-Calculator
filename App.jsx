
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMICalculator from "./BMI/BMICalculator";
import ResultPage from "./BMI/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;