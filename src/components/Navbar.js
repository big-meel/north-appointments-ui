const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1> North Appointments </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/history">Appointments History</a>
        <a href="/upcoming">Upcoming Appointments</a>
        <a href="/profile">My Info</a>
        <a href="/new-app" style={{}}>New Appointment</a>
      </div>
    </nav>
   );
}
 
export default Navbar;