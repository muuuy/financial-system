import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState();

  return (
    <div>
      <form className="auth-form--container">
        <div className="auth-form--input-container">
          <label htmlFor="login--email">Email</label>
          <input name="login--email" required />
        </div>
        <div className="auth-form--input-container">
          <label htmlFor="login--password">Password</label>
          <input name="login--password" required />
        </div>
        <div className="auth-form--input-container">
          <label htmlFor="login--verify-password">Verify Password</label>
          <input name="login--verify-password" required />
        </div>

        <button className="auth-form--submit-button">Submit</button>
      </form>
    </div>
  );
};

export { Login };
