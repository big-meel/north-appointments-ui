import React, { useState } from 'react'

const AppointmentList = ( { appointments, filter, user, timing} ) => {

  const filteredAppointments = filter(appointments)
  const formatDate = (date) => {
    let dateObject = new Date(date)
    return dateObject.toLocaleString()
  }  

  return (
    <div className='app-list'>
      <h2> {user.name}'s {timing} Appointment </h2>
      {filteredAppointments.map((app) => (
        <div className="app-preview" key={app.id}>
          <h3>{ formatDate(app.date) }</h3>
        </div>
      ))}
    </div>
  )
}

export default AppointmentList;
