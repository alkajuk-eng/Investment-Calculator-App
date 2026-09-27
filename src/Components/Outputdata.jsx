import { useEffect } from "react";
import { Investment, formater } from "../Investment";

export const Outputdata = (props) => {

  // Run the effect when inputCust changes
  useEffect(() => {

    // Display the current input values in the console
    console.log(props.inputCust);

  }, [props.inputCust]);

  // Calculate investment data using the current input values
  const resdata = Investment(props.inputCust);

  // Calculate the initial investment amount
  const initialInvestment =
    resdata[0].valueEndOfYear -
    resdata[0].interest -
    resdata[0].annInvestment;

  console.log(resdata);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Total Amount Investment</th>
        </tr>
      </thead>

      <tbody>
        {
          resdata.map(item => {

            // Calculate the total interest earned up to this year
            const totalInterest =
              item.valueEndOfYear -
              item.annInvestment * item.year -
              initialInvestment;

            // Calculate the total amount invested
            const totalAmountInv =
              item.valueEndOfYear - totalInterest;

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formater.format(item.valueEndOfYear)}</td>
                <td>{formater.format(item.interest)}</td>
                <td>{formater.format(totalInterest)}</td>
                <td>{formater.format(totalAmountInv)}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};