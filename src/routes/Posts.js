import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default Posts;
