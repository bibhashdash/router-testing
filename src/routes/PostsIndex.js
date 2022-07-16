import { Link } from "react-router-dom";

import "./PostsIndex.css";
import Card from "../UI/Card";
import useGetAllArticles from "../useGetAllArticles";
const PostsIndex = () => {
  let data = useGetAllArticles("posts");
  return (
    <div className="posts-index-container">
      <h1>Welcome to my blog posts</h1>
      <ul className="posts-grid">
        {data.map((post) => (
          <Card key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <li>
                <h3>{post.title}</h3>
                <p>{post.body.slice(0, 100)}...</p>
              </li>
            </Link>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default PostsIndex;
