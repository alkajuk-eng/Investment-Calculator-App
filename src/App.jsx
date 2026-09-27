import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Userinput } from "./Components/Userinput";
import { Outputdata } from "./Components/Outputdata";
import { Investment } from "./Investment";
import { generatereport } from "./generatereport";

function App() {
  // Store all investment input values in state
  const [inputCust, setInputCust] = useState({
    begIvestment: 4000,
    annInvestment: 1200,
    returnInv: 6,
    yearInv: 35,
  });

  // Check if the investment period is valid
  const userEnterValid = inputCust.yearInv >= 1;

  // Update the selected investment input value
  function callUserInput(InputIde, val) {
    // Update only the selected input value
    setInputCust((prev) => ({
      ...prev,
      [InputIde]: val,
    }));
  }

  // Generate the investment report as a PDF
  function handelGeneratePDF() {
    // Calculate investment results
    const resdata = Investment(inputCust);

    // Generate the PDF report
    generatereport({
      ...inputCust,
      results: resdata,
    });
  }

  return (
    <>
      {/* Display the application header */}
      <Header />

      {/* Display the investment input fields */}
      <Userinput
        inputCust={inputCust}
        callUserInput={callUserInput}
      />

      {/* Show an error message when the investment period is invalid */}
      {!userEnterValid && (
        <p className="center">
          Please ensure that the Year invested are greater that 0!
        </p>
      )}

      {/* Display the investment results when the input is valid */}
      {userEnterValid && (
        <Outputdata inputCust={inputCust} />
      )}

      {/* Center the PDF download button */}
      <div className="center">
        {/* Generate and download the PDF report when the button is clicked */}
        <button onClick={handelGeneratePDF}>
          Download PDF Report
        </button>
      </div>
    </>
  );
}

export default App;