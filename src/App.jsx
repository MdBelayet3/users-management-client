import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // useState and useEffect hook
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  // function for add user button
  const handleAllUser = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);
  }


  return (
    <>
      <h1>Users management system</h1>
      <h2>All users : {users.length}</h2>
      <form onSubmit={handleAllUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>
      <h2></h2>
    </>
  )
}

export default App
