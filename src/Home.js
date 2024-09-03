import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
const Home = () => {

    const [blogs, setBlogs]=useState(null);

const [name,setName]= useState('mario');

const handleDelete = (id) => {
const newBlogs= blogs.filter(blog => blog.id !==id)
setBlogs(newBlogs)

}
// runs on every rerender
useEffect(() => {
   fetch("http://localhost:8000/blogs")
   .then(res => {
    return res.json();//returns javascript object
 
   })
   .then(data => {
   setBlogs(data);
   });
},[]);
    return ( 

        <div className="home">
         {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
         {/* <BlogList blogs={blogs.filter((blog) => blog.author=== 'mario')} title={"Mario's blogs"}/> */}
        {/* <button onClick={() => setName('luigi')}>change name</button>
        <p> {name}</p> */}
        </div>
     );
}
 
export default Home;