import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
const Home = () => {

    const [blogs, setBlogs]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },

        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        
    ]);

const [name,setName]= useState('mario');

const handleDelete = (id) => {
const newBlogs= blogs.filter(blog => blog.id !==id)
setBlogs(newBlogs)

}
// runs on every rerender
useEffect(() => {
    console.log('use effect ran');
    console.log(name);
    //name dependency
},[name]);
    return ( 

        <div className="home">
         <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
         {/* <BlogList blogs={blogs.filter((blog) => blog.author=== 'mario')} title={"Mario's blogs"}/> */}
        <button onClick={() => setName('luigi')}>change name</button>
        <p> {name}</p>
        </div>
     );
}
 
export default Home;