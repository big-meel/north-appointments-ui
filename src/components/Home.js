import {useState} from 'react'
import AppointmentList from './AppointmentList';

const Home = () => {

  const [appointments, setAppointments] = useState([
    { id: 1, date: "2022-03-22" },
    { id: 2, date: "2022-03-25" }
  ])

  const [user, setUser] = useState(
    {id: 1, name: "Jameel"}
  )

  return ( 
    <div className="home">
      <AppointmentList appointments={appointments} user={user}/>
    </div>
   );
}
 
export default Home;