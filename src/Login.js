import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validations
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate login process
    // Here, you can use your authentication logic and API calls to validate the credentials
    // For simplicity, this example compares the email and password with hardcoded values
    const validEmail = "example@example.com";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
      setLoginSuccess(true);
      setLoggedInUser(email); // Store the logged-in user's email
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginSuccess && (
        <div>
          <h3>Login successful!</h3>
          <p>Welcome, {loggedInUser}!</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
