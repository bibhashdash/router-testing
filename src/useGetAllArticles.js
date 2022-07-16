import { getPosts } from "./data";
import { getActivities } from "./data";

const useGetAllArticles = (typeOfArticles) => {
  let data;
  switch (typeOfArticles) {
    case "posts":
      data = getPosts();
      break;
    case "activities":
      data = getActivities();
      break;

    default:
      break;
  }
  return data;
};

export default useGetAllArticles;
