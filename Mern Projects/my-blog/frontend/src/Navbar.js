import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
        <div className="nav-right">
          {user ? (
            <button
              onClick={() => {
                signOut(getAuth());
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
