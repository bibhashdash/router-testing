import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
} from "react-router-dom";
const Activity = () => {
  let { activityID } = useParams();
  return (
    <div>
      <h3>Requested Activity ID: {activityID}</h3>
    </div>
  );
};

export default Activity;
