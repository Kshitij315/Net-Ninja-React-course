import { useState } from "react";

const Home = () => {

    const [name,setName] = useState('dalio') //using hooks to change the state of name
    const [age,setAge] = useState(25)
    let [num,setNum]=useState(0)
const handleClick = () => {
    // console.log('Button clicked!',event);
    setName('john');
    setAge(30);
    setNum(++num)
}  

// const handleClickAgain  = (name,e) => {
//     console.log("Hello "+ name,e.target)
// }
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            <div>
            <p>{name} is {age} years old</p>
            <p>{num}</p>

            </div>
            <button onClick={handleClick}>Click me</button>
            {/* anonymous function */}
            {/* <button onClick={(e) =>  handleClickAgain('John Doe',e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home;