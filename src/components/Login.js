import React, { useState } from "react";
import axios  from "axios";
import { Link } from "react-router-dom";


const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    let user = {
      email: email,
      password: password
    }

    axios.post('http://north-appointments-api.herokuapp.com/api/login', {user})
    .then(response => {
      if (response.data.logged_in) {
        handleLogin(response.data)
      } else {
        setErrors(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))

  }

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }


  return (
    <div className="form">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button placeholder="Submit" type="submit">Log In</button>
      <div>
        Not yet Signed Up? 
        <Link to='/signup'>Sign Up</Link>
      </div>

        </form>
    </div>
    );
}
 
export default Login;