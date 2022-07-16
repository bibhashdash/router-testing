import { useParams } from "react-router-dom";
import { getPost } from "../data";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
const Post = () => {
  let params = useParams();
  let post = getPost(params.id);

  return (
    <div>
      <h1>Full post</h1>
      <Card>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Card>
      <Link to={"/posts"}>Back to all posts</Link>
    </div>
  );
};

export default Post;
