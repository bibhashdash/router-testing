import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Card from "../UI/Card";
import useGetOneArticle from "../useGetOneArticle";
import "./Post.css";
import { AddLikesToPost } from "../data";

const Post = () => {
  let params = useParams();
  let data = useGetOneArticle("post", params.id);
  const addLikeHandler = () => {
    console.log("You clicked the like button!");
    AddLikesToPost(params.id);
  };
  return (
    <div>
      <h1>Full post</h1>
      <Card>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <Link to={"/posts"}>Back to all posts</Link>
        <div className="likes-container">
          <div className="thumbup" onClick={addLikeHandler}>
            <span className="material-icons material-icons-outlined">
              thumb_up
            </span>
          </div>
          <div className="likes-counter">
            <span>{data.likes}</span>
            <span>Likes</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;
