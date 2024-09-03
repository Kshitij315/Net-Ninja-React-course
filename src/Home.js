import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
const Home = () => {

    const [blogs, setBlogs]=useState(null);

const [name,setName]= useState('mario');
const [isPending,setIsPending]=useState(true);

// runs on every rerender
useEffect(() => {
    //timeout to show loading longer
   setTimeout(() => {
    fetch("http://localhost:8000/blogs")
   .then(res => {
    return res.json();//returns javascript object
 
   })
   .then(data => {
   setBlogs(data);
   setIsPending(false);
   });
},1000);
},[]);
    return ( 

        <div className="home">
            {isPending  && <div> Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All blogs"/>}
         {/* <BlogList blogs={blogs.filter((blog) => blog.author=== 'mario')} title={"Mario's blogs"}/> */}
        {/* <button onClick={() => setName('luigi')}>change name</button>
        <p> {name}</p> */}
        </div>
     );
}
 
export default Home;