import {useState} from 'react'

const PatientForm = ({user}) => {
  const [firstname, setFirstname] = useState('')
  const [middlename, setMiddleName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
  const [country, setCountry] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [errors, setErrors] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    let user_data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      date_of_birth: dob,
      country: country,
      contact_number: contactNumber
    }

    axios.put(`http://localhost:3001/api/patients/${user.id}`, {user_data})
    .then(response => {
      if (response.statusText === 'Updated') {
        // handleLogin(response.data)
        // Persist user state
      } else {
        setErrors(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))
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
          Sign Up
        </button>
      </form>
    </div>
   );
}
 
export default PatientForm;