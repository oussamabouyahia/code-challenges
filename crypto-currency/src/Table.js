import React from "react";
import { cryptocurrencyList } from "./cryptocurrency-list";

function Table({ inputAmount, availableBalance }) {
  const displayCoins = (rate) => {
    if (!inputAmount) return "00000000";
    else if (inputAmount > availableBalance || inputAmount < 0.01) return "n/a";
    return (inputAmount * rate).toFixed(8);
  };
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((currency, i) => (
            <tr key={i}>
              <td>{currency.name} </td>
              <td>
                1 USD = {currency.rate} {currency.code}
              </td>
              <td>{displayCoins(currency.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
