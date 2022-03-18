import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return ( 
    <nav className="navbar">
      <h1> North Appointments </h1>
      <div className="links">
        <Link to="/">Home</Link>
        {user && <Link to="/patient">Profile</Link>}
        {user && <Link to="/create">New</Link>}
        {user && <Link to="/logout">Logout</Link>}
      </div>
    </nav>
   );
}
 
export default Navbar;