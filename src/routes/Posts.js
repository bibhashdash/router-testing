import { Link, Outlet } from "react-router-dom";
import { getPosts } from "../data";

const Posts = () => {
  let posts = getPosts();

  return (
    <div>
      <h1>Welcome to my blog posts</h1>
      <div>
        <ul>
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Posts;
