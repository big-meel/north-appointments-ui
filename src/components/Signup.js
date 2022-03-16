import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {firstname, lastname, email, password, password_confirmation} = 
      this.state
    let user = {
      firstname: firstname,
      lastname:  lastname,
      email:     email,
      password:  password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3001/api/patients', {user})
      .then(response => {
        if (response.statusText === 'Created') {
          this.props.handleLogin(response.data)
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    const {firstname, lastname, email, password, password_confirmation} =
      this.state
    if (this.state.isLoggedIn) {
      <Redirect to="/" />
    }
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='firstname'
            type='text'
            name='firstname'
            value={firstname}
            onChange={this.handleChange}
          />
          <input
            placeholder='lastname'
            type='text'
            name='lastname'
            value={lastname}
            onChange={this.handleChange}
          />
          <input
            placeholder='email'
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder='password'
            type='text'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder='password_confirmation'
            type='text'
            name='password_confirmation'
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <button placeholder='Submit' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default Signup;