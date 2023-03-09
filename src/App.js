import React from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import "./index.css"


const App = () => {
  return (
    <div>
      <AddUser />
      <UsersList users= {[]} />
    </div>
  )
}

export default App

