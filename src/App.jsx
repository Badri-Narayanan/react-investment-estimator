import { useState } from "react";
import InvestmentDetails from "./components/InvestmentDetails";
import InvestmentResults from "./components/InvestmentResults";

const INIT_INVESTMENT_DETAILS = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

function App() {
  const [investmentInfo, setInvestmentInfo] = useState(INIT_INVESTMENT_DETAILS);

  function handleUserInput(entity, value) {
    setInvestmentInfo((info) => {
      const investmentCopy = { ...info };
      investmentCopy[entity] = value;
      return investmentCopy;
    });
  }

  return (
    <>
      <InvestmentDetails {...{ investmentInfo, handleUserInput }} />
      <InvestmentResults {...{ investmentInfo }} />
    </>
  );
}

export default App;
