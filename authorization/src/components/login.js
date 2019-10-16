import React, { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "./signUp";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = props => {
  console.log(props);
  const [form, setForm] = useState({ username: "", password: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      props.history.push("/users");
    } else {
      console.log("no token");
    }
  }, []);

  const Changehandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", form)
      .then(res => {
        console.log(res);

        localStorage.setItem("token", res.data.token);
        props.history.push("/users");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1> LOG IN FORM </h1>
      <form onSubmit={submitForm}>
        {/* make a submit form */}
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={Changehandler}
        />
        <input
          name="password"
          placeholder="password"
          value={form.password}
          onChange={Changehandler}
        />
        <button type="submit"> Log In </button>
      </form>
    </div>
  );
};

export default LoginForm;
