import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // This effect fucntion runs after every
  // component render cycle. Not before it
  // and not during it, but after it.

  // useEffect(() => {
  //   console.log("Effect Running");
  // });

  // Now this function here, only executes
  // for the first time this component was mounted and rendered,
  // but not thereafter, not for any subsequent rerender cycle.

  // useEffect(() => {
  //   console.log("Effect Running");
  // }, []);

  // Now this function here, reruns whenever the
  // component was re-evaluated and this state (enteredPassword),
  // changes.

  // useEffect(() => {
  //   console.log("Effect Running");
  // }, [enteredPassword]);

  // The cleanup function, which we can return.
  // This cleanup function runs before this state
  // function(useEffect) in this case as a whole, runs,
  // but not before the first time it runs.

  // useEffect(() => {
  //   console.log("Effect Running");
  //   return () => {
  //     console.log("Effect Clean Up");
  //   };
  // }, [enteredPassword]);

  // if we had no dependencies we learned that we only see
  // effect running once, and the cleanup function in this case,
  // would run when the component is removed.

  useEffect(() => {
    console.log("Effect Running");
    return () => {
      console.log("Effect Clean Up");
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(enteredPassword.trim().length > 6 && enteredEmail.includes("@"));
    }, 500);

    // This is a cleanup function
    return () => {
      console.log("Clean Up");
      clearTimeout(identifier);
    };
  }, [setFormIsValid, enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
