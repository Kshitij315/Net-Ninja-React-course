import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  //grab the data but call it blogs in this context
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // runs on every rerender

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
