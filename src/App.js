import React, { useState } from "react";

function RegistrationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform validations
    if (!firstName || !lastName || !gender || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // Registration success
    setRegistrationSuccess(true);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {registrationSuccess && (
        <div>
          <h3>Registration successful!</h3>
          <p>
            Welcome, {firstName} {lastName}!
          </p>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;
