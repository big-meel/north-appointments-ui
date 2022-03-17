// import React, {Component} from 'react'
// import axios from 'axios'
// import {Link, Redirect} from 'react-router-dom'


// class Signup extends Component {
//   constructor(props) {
//     super(props)
//     state = {
//       firstname: '',
//       lastname: '',
//       email: '',
//       password: '',
//       password_confirmation: '',
//       errors: ''
//     }
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target
//     setState({
//       [name]: value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const {firstname, lastname, email, password, password_confirmation} = 
//       state
//     let user = {
//       firstname: firstname,
//       lastname:  lastname,
//       email:     email,
//       password:  password,
//       password_confirmation: password_confirmation
//     }
//     axios.post('http://localhost:3001/api/patients', {user})
//       .then(response => {
//         if (response.statusText === 'Created') {
//           props.handleLogin(response.data)
//         } else {
//           setState({
//             errors: response.data.errors
//           })
//         }
//       })
//       .catch(error => console.log('api errors:', error))
//   }

//   redirect = () => {
//     props.history.push('/')
//   }

//   handleErrors = () => {
//     return (
//       <div>
//         <ul>
//           {state.errors.map((error) => {
//             return <li key={error}>{error}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }

//   render() {
//     const {firstname, lastname, email, password, password_confirmation} =
//       state
//     if (state.isLoggedIn) {
//       <Redirect to="/" />
//     }
//     return (
   
//     )
//   }
// }

// export default Signup;

import axios from "axios";
import React, {useState} from "react";

const Signup = ({handleLogin}) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setConfirmation] = useState('')
  const [errors, setErrors] = useState([])


  const handleChange = (e, fun) => {
    fun(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password_confirmation, password_confirmation
    }

    axios.post('http://localhost:3001/api/patients', {user})
    .then(response => {
      if (response.statusText === 'Created') {
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='firstname'
          type='text'
          name='firstname'
          value={firstname}
          onChange={(e) => handleChange(e, setFirstname)}
        />
        <input
          placeholder='lastname'
          type='text'
          name='lastname'
          value={lastname}
          onChange={(e) => handleChange(e, setLastname)}
        />
        <input
          placeholder='email'
          type='text'
          name='email'
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
        />
        <input
          placeholder='password'
          type='text'
          name='password'
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <input
          placeholder='password_confirmation'
          type='text'
          name='password_confirmation'
          value={password_confirmation}
          onChange={(e) => handleChange(e, setConfirmation)}
        />
        <button placeholder='Submit' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
}
 
export default Signup;