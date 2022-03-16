import {Link} from 'react-router-dom'

const Home = ( {isLoggedIn} ) => {
  console.log(isLoggedIn)
  if (isLoggedIn) {
    console.log("hi")
    // return 
    return (
      <>
        <h2>Dashboard yo</h2>
        <Link to='/logout'>Log Out</Link>
      </>
    )
  }
  return ( 
    <div className="Home">
      <h2>Dashboard</h2>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
    </div>
   );
}
 
export default Home;