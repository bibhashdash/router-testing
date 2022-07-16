import { Link } from "react-router-dom";

import Card from "../UI/Card";
import "./ActivitiesIndex.css";
import useGetAllArticles from "../useGetAllArticles";
const ActivitiesIndex = () => {
  let data = useGetAllArticles("activities");

  return (
    <div className="activities-index-container">
      <h1>Check out all our activities</h1>
      <ul className="activities-grid">
        {data.map((activity) => (
          <Card key={activity.id}>
            <Link to={`/activities/${activity.id}`}>
              <h3>{activity.title}</h3>
              <p>{activity.body.slice(0, 50)}...</p>
            </Link>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesIndex;
