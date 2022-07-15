import { Link } from "react-router-dom";
import { getPosts } from "../data";
const PostsIndex = ()=> {
    let posts = getPosts();
    return (
        <div>
            <h1>Welcome to my blog posts</h1>
            <ul>
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ul>
        </div>
    )
}

export default PostsIndex