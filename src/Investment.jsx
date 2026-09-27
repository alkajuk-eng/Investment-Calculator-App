
export const Investment = (props) => {

  // Create an empty array to store the investment data for each year
  const annualData = [];

  // Store the initial investment value
  let investmentValue = props.begIvestment;

  // Loop through each investment year
  for (let i = 0; i < props.yearInv; i++) {
    // Calculate the interest earned during this year
    const interestEarnedInYear =investmentValue * (props.returnInv / 100);
    // Add the interest and annual investment to the total investment value
    investmentValue += interestEarnedInYear + props.annInvestment;
    // Store the data for this year
    annualData.push({
      year: i + 1, // Year identifier
      interest: interestEarnedInYear, // Interest earned during this year
      valueEndOfYear: investmentValue, // Investment value at the end of the year
      annInvestment: props.annInvestment // Investment added during this year
    });
  }

  // Return the investment data for all years
  return annualData;
};




// Create a number formatter for currency values
export const formater = new Intl.NumberFormat("en-GB", {
  // Format the number as a currency
  style: "currency",
  // Use British Pounds
  currency: "GBP",
  // Don't show decimal places
  minimumFractionDigits: 0,
  // Don't show more than 0 decimal places
  maximumFractionDigits: 0
});
