const Home = () => {
    
const handleClick = () => {
    console.log('Button clicked!');
}  

const handleClickAgain  = (name) => {
    console.log("Hello "+ name)
}
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* anonymous function */}
            <button onClick={() => {
                handleClickAgain('John Doe')
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;