import { Link } from "react-router-dom";
import { getPosts } from "../data";
import "./PostsIndex.css";
import Card from "../UI/Card";
const PostsIndex = () => {
  let posts = getPosts();
  return (
    <div className="posts-index-container">
      <h1>Welcome to my blog posts</h1>
      <ul className="posts-grid">
        {posts.map((post) => (
          <Card>
            <Link to={`/posts/${post.id}`} key={post.id}>
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
