import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const Signup = ({handleLogin}) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setConfirmation] = useState('')
  const [ip_address, setIpAddress] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      ip_address: ip_address
    }

    axios.post('https://north-appointments-api.herokuapp.com/api/patients', {user})
    .then(response => {
      if (response.statusText === 'Created') {
        handleLogin(response.data)
        history.push('/')
      } else {
        setErrors(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  useEffect(() => {
    axios.get('https://api.ipify.org', {params: {format: 'json'}})
    .then(response => {
      setIpAddress(response.data.ip)
      console.log(ip_address)
    })
  })

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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          placeholder='firstname'
          type='text'
          name='firstname'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          placeholder='lastname'
          type='text'
          name='lastname'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          placeholder='email'
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='password'
          type='text'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder='password_confirmation'
          type='text'
          name='password_confirmation'
          value={password_confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
        <input
          type='hidden'
          name='ip_address'
          value={ip_address}
        />
        <button placeholder='Submit' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
}
 
export default Signup;