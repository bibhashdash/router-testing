import { useParams } from "react-router-dom";
import { getPost } from "../data";
import { Link } from "react-router-dom";
const Post = () => {
  let params = useParams();
  let post = getPost(params.id);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={"/posts"}>Back to all posts</Link>
    </div>
  );
};

export default Post;
