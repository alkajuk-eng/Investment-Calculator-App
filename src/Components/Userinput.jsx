
export const Userinput = (props) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Beginning Investment</label>
          <input 
            id="initial-investment" 
            type="number" 
            required
            value={props.inputCust.begIvestment}
            onChange={(e)=>props.callUserInput('begIvestment',Number(e.target.value))}
            />
        </p>

        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input 
            id="annual-investment" 
            type="number" 
            required 
            value={props.inputCust.annInvestment}
            onChange={(e)=>props.callUserInput('annInvestment',Number(e.target.value))}
            />
        </p>

        <p>
          <label htmlFor="return-we-expect">Return We Expect</label>
          <input 
            id="return-we-expect" 
            type="number" 
            required 
            value={props.inputCust.returnInv}
            onChange={(e)=>props.callUserInput('returnInv',Number(e.target.value))}
            />
        </p>

        <p>
          <label htmlFor="investment-duration">Investment Duration</label>
          <input 
            id="investment-duration" 
            type="number" 
            required 
            value={props.inputCust.yearInv}
            onChange={(e)=>props.callUserInput('yearInv',Number(e.target.value))}
            />
        </p>
      </div>
    </section>
  );
};
