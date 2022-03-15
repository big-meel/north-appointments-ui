const Home = () => {
  
  const handleClick = () => {
    console.log("hi")
  }

  return ( 
    <div className="Home">
      <h2>Dashboard</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
   );
}
 
export default Home;