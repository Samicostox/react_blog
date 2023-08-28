import React from "react";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  const formContainerStyle = {
    position: "absolute",
    top: 0,
    height: "100%",
    transition: "all 0.6s ease-in-out"
  };

  const inputStyle = {
    backgroundColor: "#eee",
    border: "none",
    padding: "12px 15px",
    margin: "8px 0",
    width: "100%"
  };

  const buttonStyle = {
    borderRadius: "20px",
    border: "1px solid #ff4b2b",
    backgroundColor: "#ff4b2b",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "12px 45px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "transform 80ms ease-in"
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleOnSubmit}>
        <h1 style={{ fontWeight: "bold", margin: 0 }}>Sign in</h1>
        <div style={{ margin: "20px 0" }}>
          <a href="#" style={{
            border: "1px solid #dddddd",
            borderRadius: "50%",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            height: "40px",
            width: "40px"
          }}>
            <i className="fab fa-facebook-f" />
          </a>
          {/* ...other social icons */}
        </div>
        <span style={{ fontSize: "12px" }}>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          style={inputStyle}
        />
        <a href="#" style={{
          color: "#333",
          fontSize: "14px",
          textDecoration: "none",
          margin: "15px 0"
        }}>Forgot your password?</a>
        <button style={buttonStyle}>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
