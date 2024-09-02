

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title ='Welcome to the new blog';
  const likes = 123;
  const link= "http://google.com"
  //We cannot output objects
  // const person={name: 'John', age:33};
  return (
    <div className="App">
      <Navbar />
      <div className="content">
     <Home/>
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        {/* <p>{ 20 }</p>
        <p>{"Hello world"}</p> */}
        {/* <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*99}</p> */}
        {/* dynamic links */}
        {/* <a href={link}>Google</a> */} 
      </div>
    </div>
  );
}

export default App;
