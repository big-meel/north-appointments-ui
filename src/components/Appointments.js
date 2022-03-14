import React from 'react'

export default function Appointments( { appointments } ) {
  return (
    appointments.map(app => app.name)
  )
}
