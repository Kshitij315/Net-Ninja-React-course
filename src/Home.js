import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // runs on every rerender
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          //if response is not good then
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
          // console.log(err.message);
        });
    }, 1000);
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author=== 'mario')} title={"Mario's blogs"}/> */}
      {/* <button onClick={() => setName('luigi')}>change name</button>
        <p> {name}</p> */}
    </div>
  );
};

export default Home;
