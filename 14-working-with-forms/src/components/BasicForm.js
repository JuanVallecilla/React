import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameBlurHandler,
    reset: firstNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const firstNameInputClasses = firstNameInputHasError ? "form-control invalid" : "form-control";
  const lastNameInputClasses = lastNameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onBlur={firstNameBlurHandler} value={enteredFirstName} onChange={firstNameChangeHandler} />
          {firstNameInputHasError && <p className="error-text">Please enter a first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onBlur={lastNameBlurHandler} value={enteredLastName} onChange={lastNameChangeHandler} />
          {lastNameInputHasError && <p className="error-text">Please enter a last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onBlur={emailBlurHandler} value={enteredEmail} onChange={emailChangeHandler} />
        {emailInputHasError && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
