import React, { useState } from "react";
import Table from "./Table";

function Main() {
  const [inputAmount, setInputAmount] = useState(null);
  const [error, setError] = useState("");
  const availableBalance = 17042.67;

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setInputAmount(value);
    if (value === "") {
      setError("Amount cannot be empty");
    } else if (parseFloat(value) < 0.01) {
      setError("Amount cannot be less than $0.01");
    } else if (parseFloat(value) > availableBalance) {
      setError("Amount cannot exceed the available balance");
    } else {
      setError("");
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              value={inputAmount}
              required
              type="number"
              placeholder="USD"
              onChange={handleInputChange}
            />{" "}
            of my $<span>{availableBalance}</span>:
          </label>
          {error && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {error}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table inputAmount={inputAmount} availableBalance={availableBalance} />
    </div>
  );
}

export default Main;
