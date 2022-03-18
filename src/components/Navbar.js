import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return ( 
    <nav className="navbar">
      <h1> North Appointments </h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <a href="/history">Appointments History</a> */}
        {/* <a href="/upcoming">Upcoming Appointments</a> */}
        {user && <Link to="/create">New Appointment</Link>}
        {user && <Link to="/logout">Logout</Link>}
        {/* <a href="/profile">My Info</a>
        <a href="/new-app" style={{}}>New Appointment</a> */}
      </div>
    </nav>
   );
}
 
export default Navbar;