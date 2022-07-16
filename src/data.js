import React, { useState } from "react";

let posts = [
  {
    title: "Welcome to my cycling blog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    likes: 0,
    id: 1,
  },
  {
    title: "Why I enjoy cycling",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    likes: 4,
    id: 2,
  },
  {
    title: "Just getting into Cycling?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    likes: 0,
    id: 3,
  },
  {
    title: "Making the best of your Garmin",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    likes: 0,
    id: 4,
  },
  {
    title: "Hydration: Get it right!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    likes: 0,
    id: 5,
  },
];

export function getPosts() {
  return posts;
}
export function getPost(id) {
  return posts.find((post) => post.id === Number(id));
}

let activities = [
  {
    title: "Group Rides",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique.",
    id: 1,
  },
  {
    title: "Solo Rides",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique.",
    id: 2,
  },
  {
    title: "Club Races",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique.",
    id: 3,
  },
  {
    title: "Regional Sportives",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique.",
    id: 4,
  },
];

export function getActivities() {
  return activities;
}

export function getActivity(id) {
  return activities.find((activity) => activity.id === Number(id));
}

export function AddLikesToPost(id) {
  // run some code
  let [post, setPost] = useState(posts);
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      console.log("you found the liked post in data.js");
    }
  }
}
