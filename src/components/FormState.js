import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h2>Form using useState</h2>

        <div>
          <label>Full Name</label>
          <input
            id="full_name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Password Confirmation</label>
          <input
            id="password_confirmation"
            name="passwordConfirmation"
            type="password"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;