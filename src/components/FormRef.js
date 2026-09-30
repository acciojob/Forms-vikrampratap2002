import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Full Name:", fullNameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log(
      "Password Confirmation:",
      passwordConfirmationRef.current.value
    );
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h2>Form using useRef</h2>

        <div>
          <label>Full Name</label>
          <input id="full_name" type="text" ref={fullNameRef} />
        </div>

        <br />

        <div>
          <label>Email</label>
          <input id="email" type="email" ref={emailRef} />
        </div>

        <br />

        <div>
          <label>Password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>

        <br />

        <div>
          <label>Password Confirmation</label>
          <input
            id="password_confirmation"
            type="password"
            ref={passwordConfirmationRef}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;