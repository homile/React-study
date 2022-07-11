import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* htmlFor: label에 for속성을 부여
      for속성: for값과 id의 값이 같으면 연결된다. */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
