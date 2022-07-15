let posts = [
  {
    title: "Welcome to my cycling blog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    id: 1,
  },
  {
    title: "Why I enjoy cycling",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    id: 2,
  },
  {
    title: "Just getting into Cycling?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    id: 3,
  },
  {
    title: "Making the best of your Garmin",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    id: 4,
  },
  {
    title: "Hydration: Get it right!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ullamcorper libero, id ornare eros fermentum eget. Curabitur sodales arcu vitae lectus auctor tristique. Quisque semper id metus placerat blandit. Quisque in maximus elit. Sed facilisis enim vitae gravida scelerisque. Duis eleifend, ipsum id elementum ultricies, enim magna vulputate nulla, auctor varius turpis tellus ut nunc. Integer et vehicula turpis, vitae accumsan metus. Aenean convallis, eros convallis egestas commodo, purus enim euismod arcu, vitae tincidunt ligula orci vel est. Cras non neque sit amet neque imperdiet auctor.",
    id: 5,
  },
];

export function getPosts() {
  return posts;
}
export function getPost(id) {
  return posts.find((post) => post.id === Number(id));
}
