import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "../Users/AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
