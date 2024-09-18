import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
    const {id} =  useParams();
    const { data: blog, error , isPending}=useFetch("http://localhost:8000/blogs/" + id)
    const navigate=useNavigate();

    const HandleClick = () => {
        // Delete the blog
        fetch("http://localhost:8000/blogs/" + blog.id,{
            method: 'DELETE',
           
        })
        .then(() => {
            navigate("/")
        })
    }

    return (
        <div className="blog-details">
            {/* condintional loading */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Writtten by {blog.author}</p>
                    <div>{blog.body} </div>
                    <button onClick={HandleClick}>Delete</button>
                </article>
            )}
        
        </div>
      );
}
 
export default BlogDetails;