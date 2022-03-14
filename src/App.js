import './App.css';
import React, { useEffect, useState } from 'react';
import Appointments from './components/Appointments';

function App() {

  const [appointments, setAppointments] = useState([]);

  useEffect( () => {
    // Set server address url in package.json proxy
    fetch('/api/appointments')
      .then(response => response.json()
        .then(data => {
          setAppointments(data.appointments)
          console.log(data.appointments)
        })
      )
  }, [])

  return (
    <div className="App">
     <Appointments appointments={appointments} />
    </div>
  );
}

export default App;
