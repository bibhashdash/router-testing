import { useParams } from "react-router-dom";
import { getPost } from "../data";
const Post = () => {
  let params = useParams();
  let post = getPost(params.id);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
