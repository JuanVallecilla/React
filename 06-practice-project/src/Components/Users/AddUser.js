import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "../Users/AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    inputValidation();
    props.onAddUser(enteredUsername, enteredAge);
    clearInputs();
  };

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clearInputs = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };

  const inputValidation = () => {
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 0) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameHandler} value={enteredUsername} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageHandler} value={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
