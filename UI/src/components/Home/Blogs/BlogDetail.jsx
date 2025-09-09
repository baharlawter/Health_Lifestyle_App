import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>

      <p className="blog-paragraph">{blog.moreInfo}</p>
    </div>
  );
}
export default BlogDetail;
