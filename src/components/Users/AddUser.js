import React from 'react'
import Card from '../UI/Card';
import classes from "./AddUsers.module.css"
import Button from '../UI/Button';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

   const addUserHandler = (event) => {
    event.preventDefault();
   } 

   const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
   }

   const ageChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
 }

  return (
    <Card className={classes.input}>
      <form onSubmit= {addUserHandler}>

          <label htmlFor='username'>Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />

          <label htmlFor='username'>Age (years)</label>
          <input id="username" type="number" onChange={ageChangeHandler} />
          
          <Button type='submit'>Add User</Button>

      </form>
    </Card>
  )
}

export default AddUser
