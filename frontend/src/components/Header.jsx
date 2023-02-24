import React from "react";
import { UilUser, UilSignin, UilSignout } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        {user ? (
          <button className="btn" onClick={onlogout}>
            <UilSignout /> Logout
          </button>
        ) : (
          <>
            <li>
              <Link to="/login">
                <UilSignin />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <UilUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
