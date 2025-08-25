import React, { useState } from 'react';
import '../css/currency.css';
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_MeWQ9QXMaa5F4KsybuAxBeb2Sinb5jeWMxSfohGC";
Frontend // müşteri 

Backend, api  // garson
Veritabanı // aşçı 
function Currency() {
  const [amount, setAmount] = useState(0);
  const [FromCurrency, setFromCurrency] = useState('USD');
  const [ToCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState('');

  // fromCurrency, toCurrency
  const exchange = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${FromCurrency}`);
      const rate = response.data.data[ToCurrency];
      const converted = (rate * amount).toFixed(2);
      setResult(converted);
    } catch (error) {
      console.error("Exchange error:", error);
    }
  };

  return (
    <div className='currency-div'>
      <div>
        <h3 className='title'>CURRENCY APPLICATION</h3>
      </div>

      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className='amount'
        />
        <select
          value={FromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className='currency-options'
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowRight style={{ padding: "10px", marginBottom: "-10px" }} />
        <select
          value={ToCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className='tocurrency-options'
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          type="number"
          className='result'
          value={result}
          readOnly
        />
      </div>

      <div>
        <button
          onClick={exchange}
          className='exchange-button'
        >
          Exchange
        </button>
      </div>
    </div>
  );
}

export default Currency;
