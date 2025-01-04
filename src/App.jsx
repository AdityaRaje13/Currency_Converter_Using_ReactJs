import { useState } from "react";
import "./App.css";

function App() {

  let res;
  let result = {};

  const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", 
    "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", 
    "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", 
    "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", 
    "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", 
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", 
    "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", 
    "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", 
    "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", 
    "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", 
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", 
    "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", 
    "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", 
    "XPF", "YER", "ZAR", "ZMW", "ZWL"
  ];

  const CurrencyInfo = async (from, to, amount) => {

    console.log(from);
    console.log(to);
    console.log(amount);

    const url = `https://xchangemate-currency-converter-api.p.rapidapi.com/convert?from=${from}&amount=${amount}&to=${to}`;
  
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8dc1c202cemshb799da17a3e26d8p10d2fcjsn026d1d2e50cd",
        "x-rapidapi-host": "xchangemate-currency-converter-api.p.rapidapi.com",
      },
    };
  
    try {
      res = await fetch(url, options);
      result = await res.json();
      // console.log(result);
    } 
    catch {
      console.log(Error);
    }
  };

  const[from, setFrom] = useState("USD");
  const[to, setTo] = useState("INR");
  const[amount, setAmount] = useState(1);
  const[output, setOutput] = useState(0);

  const handleClick = async () => {

    await CurrencyInfo(from,to,amount);
    setOutput(result.converted);
    // console.log(result.converted);
    
  }

  return (
    <>

      <div className="container">

        <div className="hero">

          {/* card 1 */}
          <div className="card1">
            <div className="card">

              <div>
                  <label htmlFor="amount"> From : </label>
                  <input type="number" value={amount} min={1} name="amount" onChange={(e) => setAmount(e.target.value)}/>
              </div>

              <div>
                  <label htmlFor="currency">Currency Type :</label>
                  <select name="currency" id="cr" onChange={(e) => {setFrom(e.target.value)}}>
                      <option value="USD" defaultChecked>USD</option>

                      {currencyCodes.map((code, idx) => (
                          <option value={code} key={idx} >{code}</option>
                      ))}

                  </select>
              </div>  
            </div>
          </div>

          {/* card 2 */}
          <div className="card2">
            <div className="card">

              <div>
                  <label htmlFor="amount"> To : </label>
                  <input type="text" value={output} min={0} name="amount" readOnly/>
              </div>

              <div>
                  <label htmlFor="currency">Currency Type :</label>
                  <select name="currency" id="cr" onChange={(e) => {setTo(e.target.value)}}>
                      <option value="INR" defaultChecked>INR</option>

                      {currencyCodes.map((code, idx) => (
                          <option value={code} key={idx}>{code}</option>
                      ))}

                  </select>
              </div>  
            </div>
          </div>

          {/* buttons */}
          <div className="btns">

            <button className="button" onClick={handleClick}>
               {`Convert ${from} to ${to}`}
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default App;
