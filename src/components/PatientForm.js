import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const PatientForm = ({user, handleLogin}) => {
  const [firstname, setFirstname] = useState(user.firstname)
  const [middlename, setMiddleName] = useState(user.middlename)
  const [lastname, setLastname] = useState(user.lastname)
  const [email, setEmail] = useState(user.email)
  const [dob, setDOB] = useState(user.date_of_birth)
  const [country, setCountry] = useState(user.country)
  const [contactNumber, setContactNumber] = useState(user.contact_number)
  const [errors, setErrors] = useState([])

  const history = useHistory()
  const id = user.id

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = {
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      email: email,
      date_of_birth: dob,
      country: country,
      contact_number: contactNumber
    }

    axios.put(`https://north-appointments-api.herokuapp.com/api/patients/${id}`, {user})
    .then(response => {
      if (response.statusText === 'OK') {
        handleLogin(response.data)
        history.push('/patient')
      } else {
        setErrors(response.data.errors)
      }
    })
    .catch(error => {
      console.log('api errors:', error)
      setErrors(response.data.errors)
    })
  }


  return ( 
    <div>
      {errors && <p> Errors: {errors}</p>}
      <form className="form" onSubmit={handleSubmit}>
      <h1>Profile</h1>
        <input
          placeholder='firstname'
          type='text'
          name='firstname'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          placeholder='middlename'
          type='text'
          name='firstname'
          value={middlename}
          onChange={(e) => setMiddleName(e.target.value)}
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
          placeholder='dob'
          type='date'
          name='dob'
          min={new Date}
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        <input
          placeholder='country'
          type='text'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          placeholder='contact-number'
          type='text'
          name='contact-number'
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <button placeholder='Submit' type='submit'>
          Update
        </button>
      </form>
    </div>
   );
}
 
export default PatientForm;