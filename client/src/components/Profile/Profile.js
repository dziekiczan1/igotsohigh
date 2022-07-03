import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { logOut } from "../../redux/authSlice";
import "./Profile.scss";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      {user ? (
        <Card
          bg="success"
          text="light"
          border="warning"
          className="card-noteCard m-2"
        >
          <Card.Body className="m-2 py-0 profile-card">
            <div className="image">
              <img
                src="https://piotr.rzadkowolski.dev/noimage.png"
                height="60px"
                alt="profile"
              />
            </div>
            <h5>Welcome, {user.result.name}</h5>
          </Card.Body>
          <Card.Body className="m-2 py-0 profile-card-footer">
            <Button
              variant="danger"
              size="sm"
              onClick={logout}
              className="button-logout"
            >
              Logout
            </Button>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};

export default Profile;
