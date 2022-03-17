import React, { useState } from 'react'

const AppointmentList = ( { appointments, user} ) => {

  // Make request to appointments on load
  

  return (
    <div className='app-list'>
      <h2> {user.name}'s Upcoming Appointment </h2>
      {appointments.map((app) => (
        <div className="app-preview" key={app.id}>
          <h3>{ app.date  }</h3>
        </div>
      ))}
    </div>
  )
}

export default AppointmentList;
