import React, { useState } from "react";
const initialState = { name: "", email: "", employeeId: "", joiningDate: "" };
function EmployeeValidationForm() {
  const [employee, setEmployee] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };
  function validEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  function validName(name) {
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name) && name?.length > 3;
  }
  function validId(id) {
    const pattern = /^\d+$/;
    return id.length === 6 && pattern.test(id);
  }

  function isValidPastDate(dateString) {
    // Convert the input date (YYYY-MM-DD) to a Date object
    const inputDate = new Date(dateString);
    // Get today's date (without time)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate < today;
  }
  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={employee.name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={handleChange}
        />
        {validName(employee.name) === false && (
          <p className="error mt-2">
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={employee.email}
          placeholder="Email"
          onChange={handleChange}
        />
        {!validEmail(employee.email) && (
          <p className="error mt-2">Email must be a valid email address</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={employee.employeeId}
          placeholder="Employee ID"
          onChange={handleChange}
        />
        {!validId(employee.employeeId) && (
          <p className="error mt-2">Employee ID must be exactly 6 digits</p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={employee.joiningDate}
          placeholder="Joining Date"
          onChange={handleChange}
        />
        {!isValidPastDate(employee.joiningDate) && (
          <p className="error mt-2">Joining Date cannot be in the future</p>
        )}
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        disabled={
          !validId(employee.employeeId) ||
          !validEmail(employee.email) ||
          !validName(employee.name) ||
          !isValidPastDate(employee.joiningDate)
        }
        onClick={() => setEmployee(initialState)}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
