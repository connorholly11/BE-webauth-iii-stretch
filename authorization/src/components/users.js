import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const Users = props => {
  console.log("props", props);
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
    props.history.push("/");
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
            <p>Username: {users.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
