

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title ='Welcome to the new blog';
  const likes = 123;
  const link= "http://google.com"
  //We cannot output objects
  // const person={name: 'John', age:33};
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">

<Routes>

  <Route path="/" element={<Home />}></Route>

  <Route path="/create" element={<Create />}></Route>
  <Route path="/blogs/:id" element={<BlogDetails />}></Route>


</Routes>

</div>
    </div>
    </Router>
  );
}

export default App;
