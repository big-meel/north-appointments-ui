import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AppointmentList = ( { appointments, filter, user, timing} ) => {

  const filteredAppointments = filter(appointments)
  const formatDate = (date) => {
    let dateObject = new Date(date)
    return dateObject.toLocaleString()
  }  

  return (
    <div className='app-list'>
      <h2> {user.firstname}'s {timing} Appointment </h2>

      {filteredAppointments.map((app) => (
        <div className="app-preview" key={app.id}>
          <Link to={`/appointments/${app.id}`}>
            <h3>{ formatDate(app.date) }</h3>
            <p> Click for details </p>
          </Link>
        </div>
      ))}

    </div>
  )
}

export default AppointmentList;
