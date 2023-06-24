import { useState } from "react";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleChange}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
