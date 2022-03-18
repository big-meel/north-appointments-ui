import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AppointmentList = ( {user} ) => {

  // const filteredAppointments = filter(appointments)
  const [appointments, setAppointments] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const formatDate = (date) => {
    let dateObject = new Date(date)
    return dateObject.toLocaleString()
  }  

  useEffect(() => {
    if (user) {

      axios.get('https://north-appointments-api.herokuapp.com/api/appointments', {params: {patient_id: user.id}})
      .then(response => {
        setAppointments(response.data.appointments) 
        setIsLoading(false)
        setError('')
      })
      .catch(err => {
        console.log('api errors:', err)
        setError(err.message)
        setIsLoading(true)
      })
    }
  }, [])


  return (
    <div className='app-list'>
      <h2> {user.firstname}'s Appointments </h2>
      {isLoading && <p>Loading...</p>}
      {appointments.map((app) => (
        <div className="app-preview" key={app.id}>
          <Link to={`/appointments/${app.id}`}>
            <h3>{ formatDate(app.date) }</h3>
            <p> Click for details </p>
          </Link>
          <br/><br/>
        </div>
      ))}

    <Link to="/history">See Past Appointments</Link>
    </div>
  )
}

export default AppointmentList;
