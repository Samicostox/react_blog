import React from "react";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(`You are sign up with name: ${name} email: ${email} and password: ${password}`);

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
        <h1 style={{ fontWeight: "bold", margin: 0 }}>Create Account</h1>
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
        <span style={{ fontSize: "12px" }}>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          style={inputStyle}
        />
        <button style={buttonStyle}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
