import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9595/user", user);
    navigate("/");
  };

  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter Your Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                onChange={(e) => onInputChange(e)}
                name="username"
                value={username}
                placeholder="Enter Your Username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email Address
              </label>
              <input
                type={"text"}
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                placeholder="Enter Your Email"
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger mx-2">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
