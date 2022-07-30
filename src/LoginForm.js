import React, { useState } from "react";
import "./styles.css";

const LoginForm = () => {
  const database = [
    {
      username: "divya",
      password: "divya"
    },
    {
      username: "selvi",
      password: "selvi"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);
    console.log("user", userData);
    if (userData) {
      if (userData.password !== pass.value) {
        console.log("checkingpass");
        setErrorMessage({ name: "pass", message: errors.pass });
        console.log("error", setErrorMessage);
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessage({ name: "uname", message: errors.uname });
    }
  };
  const renderForm = (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <div className="input-container">
          <label className="labelpass">UserName </label>

          <input type="text" name="uname" required />

          {renderErrorMessage("usename")}
        </div>
        <div className="input-container">
          <label className="labelpass">Password </label>

          <input type="password" name="pass" required />

          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>user logged in successfully</div> : renderForm}
      </div>
    </div>
  );
};

export default LoginForm;
