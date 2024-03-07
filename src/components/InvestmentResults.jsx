import { calculateInvestmentResults, formatter } from "../util/investment";

export default function InvestmentResults({ investmentInfo }) {
  let isDataProvided = Object.values(investmentInfo).every(value => value);

  if (!isDataProvided) {
    return (
      <div id="result">
        <h2>Please provide all the necessary investment details above.</h2>
      </div>
    );
  }

  const annualInvestmentData = calculateInvestmentResults(investmentInfo);

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {annualInvestmentData.map(
          ({
            year,
            interest,
            totalInterest,
            valueEndOfYear
          }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(valueEndOfYear - totalInterest)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
