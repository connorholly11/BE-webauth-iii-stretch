import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    department: ""
  });

  const changehandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("http://localhost:5000/api/register", form)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <div>
      <h1>Sign up form</h1>
      <form onSubmit={submitForm}>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={changehandler}
        />
        <input
          name="password"
          placeholder="password"
          value={form.password}
          onChange={changehandler}
        />
        <input
          name="department"
          placeholder="department"
          value={form.department}
          onChange={changehandler}
        />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
