import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    InputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // Two ways to get the entered value, Using useState or useRef

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    // Here we state we can reset the value with useState, as for
    // useRef is not ideal because we will be manipulating the dom
    // directly (as we want to react to be the one manipulating the DOM)
    resetNameInput();

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };
  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control ";
  const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler} />
        {emailInputIsInvalid && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
