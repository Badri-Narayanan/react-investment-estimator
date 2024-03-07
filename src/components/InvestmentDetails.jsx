export default function InvestmentDetails({ investmentInfo, handleUserInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentInfo;

  function onInput(event) {
    const inputElmnt = event.target;
    const parsedValue = parseInt(inputElmnt.value);
    const intValue =  (parsedValue && parsedValue > 0) ? parsedValue : "";
    handleUserInput(inputElmnt.id, intValue);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={onInput}
            id="initialInvestment"
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={onInput}
            id="annualInvestment"
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={onInput}
            id="expectedReturn"
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            value={duration}
            onChange={onInput}
            id="duration"
          />
        </div>
      </div>
    </div>
  );
}
