import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const changehandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={form.user}
          onChange={changehandler}
        />
      </form>
    </div>
  );
};

export default SignUp;
