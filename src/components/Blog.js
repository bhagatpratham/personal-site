import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dev.to/api/articles?username=pratham10")
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then((res) => setBlog(res));
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <h2>
        {blog.map((res) => {
          return <h2>{res}</h2>;
        })}
      </h2> */}
    </>
  );
};

export default Blog;
