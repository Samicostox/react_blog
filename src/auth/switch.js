import React, { useState } from "react";
import SignInForm from "./signin";
import SignUpForm from "./signup";

const SignInUpSwitcher = () => {
  const [type, setType] = useState("signIn");

  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const containerStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
    position: "relative",
    overflow: "hidden",
    width: "768px",
    maxWidth: "100%",
    minHeight: "480px",
    ...(type === "signUp" && { transform: "translateX(100%)" })
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>Sign in/up Form</h2>
      <div style={containerStyle} id="container">
        <SignUpForm />
        <SignInForm />
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "50%",
          height: "100%",
          overflow: "hidden",
          transition: "transform 0.6s ease-in-out",
          zIndex: 100
        }}>
          <div style={{
            background: "linear-gradient(to right, #ff4b2b, #ff416c)",
            color: "#ffffff",
            position: "relative",
            left: "-100%",
            height: "100%",
            width: "200%",
            transform: "translateX(0)",
            transition: "transform 0.6s ease-in-out"
          }}>
            {/* ...overlay panels here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpSwitcher;
