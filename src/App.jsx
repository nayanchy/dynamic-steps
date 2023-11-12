import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Dynamically integrate your application",
];
function App() {
  const [step, setStep] = useState(1);
  const maxSteps = messages.length;
  const handleClick = (text) => {
    if (text === "prev") {
      if (step > 1) {
        setStep((prevStep) => prevStep - 1);
      }
    } else if (text === "next") {
      if (step < maxSteps) {
        setStep((nextStep) => nextStep + 1);
      }
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_, index) => {
          return (
            <div
              key={index + 1}
              className={`step-${step} ${step === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          className="previous"
          onClick={() => handleClick("prev")}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => handleClick("next")}
          disabled={step === maxSteps}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
