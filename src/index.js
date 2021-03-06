import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Activities from "./routes/Activities";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Posts from "./routes/Posts";
import Post from "./routes/Post";
import PostsIndex from "./routes/PostsIndex";
import ActivitiesIndex from "./routes/ActivitiesIndex";
import Activity from "./routes/Activity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />}>
            <Route index element={<ActivitiesIndex />} />
            <Route path=":id" element={<Activity />} />
            <Route path="*" element={<h2>No post here</h2>} />
          </Route>
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostsIndex />} />
            <Route path=":id" element={<Post />} />
            <Route path="*" element={<h2>No post here</h2>} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
