

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';

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
        
      </div>
    </div>
  );
}

export default App;
