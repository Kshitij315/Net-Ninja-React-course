import { useState } from "react";

const Home = () => {

    const [name,setName] = useState('dalio') //using hooks to change the state of name
    
const handleClick = () => {
    // console.log('Button clicked!',event);
    setName('john');
}  

// const handleClickAgain  = (name,e) => {
//     console.log("Hello "+ name,e.target)
// }
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            {/* anonymous function */}
            {/* <button onClick={(e) =>  handleClickAgain('John Doe',e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home;