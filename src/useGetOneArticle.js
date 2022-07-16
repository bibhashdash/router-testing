import { getPost } from "./data";
import { getActivity } from "./data";

const useGetOneArticle = (typeOfArticle, id) => {
  let data;
  switch (typeOfArticle) {
    case "post":
      data = getPost(id);
      break;
    case "activity":
      data = getActivity(id);
      break;

    default:
      break;
  }
  return data;
};

export default useGetOneArticle;
