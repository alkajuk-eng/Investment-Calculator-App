import jsPDF from "jspdf";

export const generatereport = (data) => {

  // Create a new PDF document
  const doc = new jsPDF();

  // Set the title font size
  doc.setFontSize(20);

  // Add the report title
  doc.text("Investment Report", 10, 15);

  // Set the information font size
  doc.setFontSize(12);

  // Add investment information to the PDF
  doc.text(`Beginning Investment: ${data.begIvestment}`, 10, 35);
  doc.text(`Annual Investment: ${data.annInvestment}`, 10, 45);
  doc.text(`Return on Investment: ${data.returnInv}%`, 10, 55);
  doc.text(`Year of Investment: ${data.yearInv}`, 10, 65);

  // Calculate the initial investment
  const initialInvestment =
    data.results[0].valueEndOfYear -
    data.results[0].interest -
    data.results[0].annInvestment;

  // Set the starting position for the yearly data
  let yOfset = 85;

  // Get the PDF page height
  const pageHeight = doc.internal.pageSize.height;

  // Set the font size for the yearly data
  doc.setFontSize(10);

  // Add table headers
  doc.text("Year", 10, yOfset);
  doc.text("Investment", 40, yOfset);
  doc.text("Interest", 80, yOfset);
  doc.text("Total Interest", 115, yOfset);
  doc.text("Total Amount", 160, yOfset);

  // Move down after the table headers
  yOfset += 10;

  // Add each year's investment data
  data.results.forEach((yearDat) => {

    // Check if there is enough space for the next row
    if (yOfset > pageHeight - 20) {

      // Add a new page
      doc.addPage();

      // Reset the vertical position
      yOfset = 20;

      // Add table headers to the new page
      doc.text("Year", 10, yOfset);
      doc.text("Investment", 40, yOfset);
      doc.text("Interest", 80, yOfset);
      doc.text("Total Interest", 115, yOfset);
      doc.text("Total Amount", 160, yOfset);

      // Move down after the table headers
      yOfset += 10;
    }

    // Calculate the total interest
    const totalInterest =
      yearDat.valueEndOfYear -
      yearDat.annInvestment * yearDat.year -
      initialInvestment;

    // Calculate the total amount invested
    const totalAmountInv =
      yearDat.valueEndOfYear - totalInterest;

    // Add the year
    doc.text(`${yearDat.year}`, 10, yOfset);

    // Add the investment value at the end of the year
    doc.text(`${yearDat.valueEndOfYear.toFixed(0)}`, 40, yOfset);

    // Add the interest earned during the year
    doc.text(`${yearDat.interest.toFixed(0)}`, 80, yOfset);

    // Add the total interest
    doc.text(`${totalInterest.toFixed(0)}`, 115, yOfset);

    // Add the total amount invested
    doc.text(`${totalAmountInv.toFixed(0)}`, 160, yOfset);

    // Move to the next row
    yOfset += 7;
  });

  // Save the PDF file
  doc.save("investment-report.pdf");
};