import { useState } from "react";
import React from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          className="email"
          placeholder="Enter e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button">Enviar</button>
    </div>
  );
};

export default SignUp;
