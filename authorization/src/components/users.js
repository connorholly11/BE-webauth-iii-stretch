import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/users", users)
      .then(res => {
        console.log(res);
        setUsers(res.data.users);
      });
  }, []);

  const SignOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
  };

  return (
    <div>
      <form onSubmit={SignOut}>
        <button type="submit">Sign Out</button>
      </form>
      <h1> Here are the users! </h1>
      {users.map(users => {
        console.log(users);
        return (
          <div key={users.id}>
            <h1>Username: {users.username}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
