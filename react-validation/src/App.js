import React from "react";
import "./App.css";
import "h8k-components";
import EmployeeValidationForm from "./EmployeeValidation";

const title = "Employee Validation";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <EmployeeValidationForm />
    </div>
  );
};

export default App;
