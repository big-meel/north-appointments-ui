import Login from './Login';
import AppointmentList from './AppointmentList';

const Home = ({user, handleLogin}) => {

  return ( 
    <div className="home">
      {!user && <Login handleLogin={handleLogin}/>}
      {user && <AppointmentList user={user}/>}
    </div>
   );
}
 
export default Home;