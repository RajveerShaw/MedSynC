import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Stack, Typography, Button, Avatar } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login page after logout
  };

// Try to retrieve the 'user' object from localStorage
let user = null;
try {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user = JSON.parse(storedUser);
  } else {
    console.warn("No user data found in localStorage.");
  }
} catch (error) {
  console.error("Error parsing user data from localStorage:", error);
}

const profilePic = user?.picture || "defaultPic.jpg"; 
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        px: "20px",
        bgcolor: "black",
        height: "100px",
        alignItems: "center",
        zIndex: 1100,
        top: 0,
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#FF6666",
          transition: "color 0.3s", // Smooth transition effect
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6666")}
      >
        <img
          src={Logo}
          alt="logo"
          style={{ width: "54px", height: "54px", margin: "0px 20px" }}
        />
        <Typography variant="h6" style={{ color: "inherit", fontSize : '25px' }}>
          MedSynC
        </Typography>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="center"
      >
        {location.pathname.includes("/exercise") ||
        location.pathname.includes("/track") ||
        location.pathname.includes("/blog") ||
        location.pathname.includes("/calc") ? (
          <>
            <Link
              to="/exercise"
              style={{ textDecoration: "none", color: "white" }}
            >
              Exercises
            </Link>
            <Link to="/calc" style={{ textDecoration: "none", color: "white" }}>
              Calculator
            </Link>
            <Link
              to="/track"
              style={{ textDecoration: "none", color: "white" }}
            >
              Tracker
            </Link>
            <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>
              Blog
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="Home"
              style={{ 
                textDecoration: "none",
                color: "#FF6666",
                fontSize: "19px",
                transition: "color 0.3s", // Smooth transition effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6666")}
            >
              HOME
            </Link>

            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#FF6666",
                fontSize: "19px",
                transition: "color 0.3s", // Smooth transition effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6666")}
            >
              LOGIN/SIGNUP
            </Link>
          </>
        )}
        {user && (
          <>
            <Avatar src={profilePic} alt="profile" />
            <Button
              onClick={handleLogout}
              style={{
                color: "#FF6666",
                fontSize: "19px",
                transition: "color 0.3s", // Smooth transition effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6666")}
            >
              LOGOUT
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
