import React from "react";
import Card from "./Card";

function Form() {
  return (
    <Card>
      <form id="info-form">
        <h2>Form</h2>

        <div>
          <label>Full Name</label>
          <input id="full_name" type="text" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <input id="email" type="email" />
        </div>

        <br />

        <div>
          <label>Password</label>
          <input id="password" type="password" />
        </div>

        <br />

        <div>
          <label>Password Confirmation</label>
          <input id="password_confirmation" type="password" />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;