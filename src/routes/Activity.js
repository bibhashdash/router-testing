import React from "react";
import { useParams, Link } from "react-router-dom";

import Card from "../UI/Card";
import useGetOneArticle from "../useGetOneArticle";
const Activity = () => {
  const params = useParams();
  let data = useGetOneArticle("activity", params.id);

  return (
    <div>
      <Card>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <Link to={"/activities"}>Back to all activities</Link>
      </Card>
    </div>
  );
};

export default Activity;
