import { useState } from "react";
import "./App.css";

import "h8k-components";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const validEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length > 2 && validEmail(email) && message.length > 10) {
      setSubmittedData({ name, email, message });
      setEmail("");
      setName("");
      setMessage("");
    } else setError("All fields are required and should be valids");
  };

  return (
    <>
      <h8k-navbar header="Contact Form"></h8k-navbar>
      <div className="App">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="name-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            data-testid="email-input"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            data-testid="message-input"
          />
          <button type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}
        {submittedData.name && submittedData.email && submittedData.message && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
